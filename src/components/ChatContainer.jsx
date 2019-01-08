import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import { PostMessageBox } from './PostMessageBox.jsx';
import { Chat } from './Chat.jsx';
import { generateRandomNumber, twitchChatGenerator } from '../functions/chatGenerator.js';
import { emotes } from '../functions/emotesObject.js';
// import * as Scroll from 'react-scroll';
// import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
// const scroll = Scroll.animateScroll;

const App = styled.div`
  background-color: #faf9fa;
  font-size: 12px;
  width: 335px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;
const Header = styled.div`
  padding: 20px 50px;
  text-align: center;
  box-shadow: inset 0 -1px 0 0 #dad8de;
`;

const ChatBox = styled.div`
  padding: 10px;
  height: 530px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { twitchChats: [] };

    this.test = this.test.bind(this);
    this.emoteCheck = this.emoteCheck.bind(this);
    this.grabUsername = this.grabUsername.bind(this);
    // this.updateScroll = this.updateScroll.bind(this);
  }

  emoteCheck(obj) {
    const words = obj.chat.split(' ');
    const wordsWithEmoteImgTags = words.map(word => {
      return emotes.globalEmotes[word]
        ? `<span> <img width='28px' height='28px' src=${emotes.globalEmotes[word]} /> </span>`
        : word;
    });
    obj.chat = wordsWithEmoteImgTags.join(' ');
    return obj;
  }

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
        console.error('error from grabUsername in ChatContainer', err);
      });
  }

  test() {
    const chatsWithEmotes = this.emoteCheck(twitchChatGenerator());
    return this.grabUsername(chatsWithEmotes.user_id)
      .then(userObj => {
        const chatInfo = {
          user_id: chatsWithEmotes.user_id,
          chat: chatsWithEmotes.chat,
          username: userObj.username,
          twitch_sub: userObj.twitch_sub,
          mod_status: userObj.mod_status
        };
        this.setState({
          twitchChats: [...this.state.twitchChats, chatInfo]
        });
      })
      .catch(err => {
        console.error('error from test function in ChatContainer', err);
      });
  }

  componentDidMount() {
    this.interval = setInterval(() => this.test(), 500);
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  // updateScroll() {
  //   scroll.scrollToBottom();
  // console.log('is this funciton even being called?')
  // const chatBox = document.getElementById('chatBox');
  // chatBox.scrollTop = chatBox.scrollHeight;

  //}

  // componentDidUpdate() {
  //   this.updateScroll();
  // }

  render() {
    console.log('👻', this.state);
    return (
      <App>
        <Header>Chat On Videos</Header>
        <div id="chatBox">
          <ChatBox>
            {this.state.twitchChats.length ? this.state.twitchChats.map((twitchChat, index) => {
              return <Chat chat={twitchChat}/>;
            }) : null}
          </ChatBox>
        </div>
        <PostMessageBox />
      </App>
    );
  }
}

ReactDOM.render(<ChatContainer />, document.getElementById('main'));

