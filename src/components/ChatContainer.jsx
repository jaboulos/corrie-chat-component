import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import styled from 'styled-components';
import Timer from 'easytimer.js';
import { PostMessageBox } from './PostMessageBox.jsx';
import ChatBox from './ChatBox.jsx';
import { Chat } from './Chat.jsx';
import { generateRandomNumber, twitchChatGenerator } from '../functions/chatGenerator.js';
import { emotes } from '../functions/emotesObject.js';

const timer = new Timer();

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


export class ChatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { twitchChats: [] };

    this.generateRandomChats = this.generateRandomChats.bind(this);
    this.emoteCheck = this.emoteCheck.bind(this);
    this.grabUsername = this.grabUsername.bind(this);
    this.onStart = this.onStart.bind(this);
    this.formatTime = this.formatTime.bind(this);
    this.postMessage = this.postMessage.bind(this);
  }

  emoteCheck(obj) {
    const words = obj.chat.split(' ');
    const wordsWithEmoteImgTags = words.map(word => {
      return emotes.globalEmotes[word]
        ? `<span> <img max-width='28px' max-height='28px' src=${emotes.globalEmotes[word]} /> </span>`
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

  generateRandomChats() {
    const chatsWithEmotes = this.emoteCheck(twitchChatGenerator());
    return this.grabUsername(chatsWithEmotes.user_id)
      .then(userObj => {
        const chatInfo = {
          user_id: chatsWithEmotes.user_id,
          chat: chatsWithEmotes.chat,
          username: userObj.username,
          twitch_sub: userObj.twitch_sub,
          mod_status: userObj.mod_status,
          currentTimeStamp: this.formatTime(),
          color: userObj.color
        };
        this.setState({
          twitchChats: [...this.state.twitchChats, chatInfo]
        });
      })
      .catch(err => {
        console.error('error from test function in ChatContainer', err);
      });
  }

  onStart() {
    // async check to see if video id exists in database
    //   .then(update video state with ID)
    //   .then(grab all the chats for that video out of db and set twitchChats state)

    //else
    const intervalID = setInterval(() => this.generateRandomChats(), 500);
    this.setState({intervalID});
    console.log('🦴 YO DAWG', intervalID);
    timer.start();
  }

  formatTime() {
    const currentTime = timer.getTimeValues();
    const seconds = currentTime.seconds < 10 ? `0${currentTime.seconds}` : currentTime.seconds;
    const minutes = currentTime.minutes < 10 ? `0${currentTime.minutes}` : currentTime.minutes;
    const hours = currentTime.hours < 10 ? `0${currentTime.hours}` : currentTime.hours;
    if (currentTime.hours < 1) {
      if (currentTime.minutes < 1) {
        return `0:${seconds}`;
      } else {
        return `${minutes}:${seconds}`;
      }
    } else {
      return `${hours}:${minutes}:${seconds}`;
    }
  }

  postMessage(chat) {
    clearInterval(this.state.intervalID);

    const message = this.emoteCheck( { chat } );

    const chatInfo = {
      user_id: 504,
      chat: message.chat,
      username: 'taco_TUESDAY',
      color: 'slateblue',
      twitch_sub: true,
      mod_status: false,
      currentTimeStamp: this.formatTime()
    };
    this.setState({
      twitchChats: [...this.state.twitchChats, chatInfo]
    });


  }

  startSpamMode() {

  }

  componentDidMount() {
    this.onStart();
  }

  render() {
    return (
      <App>

        <Header>Chat On Videos</Header>

        <ChatBox chatsArray={this.state.twitchChats} />

        <PostMessageBox postMessage={this.postMessage}/>

      </App>
    );
  }
}
