import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { PostMessageBox } from './PostMessageBox.jsx'
import { generateRandomNumber, twitchChatGenerator } from '../functions/chatGenerator.js';
import { emotes } from '../functions/emotesObject.js';


class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chat: '' };

    this.test = this.test.bind(this);
    this.emoteCheck = this.emoteCheck.bind(this);
    this.grabUsername = this.grabUsername.bind(this);
  }

  emoteCheck(obj) {
    const words = obj.chat.split(' ');
    const wordsWithEmoteImgTags = words.map(word => {
      return emotes.globalEmotes[word]
        ? `<span> <img src=${emotes.globalEmotes[word]} /> </span>`
        : word;
    });
    obj.chat = wordsWithEmoteImgTags.join(' ');
    return obj;
  }

//This get request is to retrieve user information based off of the supplied user ID
  grabUsername(userID) {
    return axios.get('/users', {
      params: {
        id: userID
      }
    })
      .then(userObj => {
        return userObj.data;
      })
      .catch(err => {
        console.error('error from ChatContainer', err);
      });
  }

  test() {
    const chatsWithEmotes = this.emoteCheck(twitchChatGenerator());
    return this.grabUsername(chatsWithEmotes.user_id)
      .then(userObj => {
        this.setState({
        // video_timestamp:
          user_id: chatsWithEmotes.user_id,
          chat: chatsWithEmotes.chat,
          username: userObj.username,
          twitch_sub: userObj.twitch_sub,
          mod_status: userObj.mod_status
        });
      })
      .catch(err => {
        console.error('error from ChatContainer', err);
      });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.test(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    // console.log('👻', this.state);
    return (
      <div class="chat">
        <div className="header"> Chat on Videos </div>
        <div className="chatDisplay">
          <span> {this.state.username} </span>{' '}
          <span dangerouslySetInnerHTML={{ __html: this.state.chat }} />
        </div>
        <PostMessageBox />
      </div>
    );
  }
}

ReactDOM.render(<ChatContainer />, document.getElementById('main'));

