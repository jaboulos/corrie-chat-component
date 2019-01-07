import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { generateRandomNumber, twitchChatGenerator } from '../functions/chatGenerator.js';
import { emotes } from '../functions/emotesObject.js';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chat: ''};

    this.test = this.test.bind(this);
    this.emoteCheck = this.emoteCheck.bind(this);
  }

  emoteCheck(obj) {
    const words = obj.chat.split(' ');
    const test = words.map(word => {
      return emotes.globalEmotes[word] ? `<span> <img src=${emotes.globalEmotes[word]} /> </span>` : word;
    });
    obj.chat = test.join(' ');
    return obj;
  }

  grabUsername(obj) {
    const username = obj.user_id;
    fetch('http://localhost:8080/users', {
      method: 'GET',
      body: username.toString()
    });
    // send request to /username
    // query db
    // return username and privledges

  }

  test() {
    const chatsWithEmotes = this.emoteCheck(twitchChatGenerator());
    this.setState(chatsWithEmotes);
  }

  componentDidMount() {
    this.interval = setInterval(() => this.test(), 700);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    console.log(this.state);
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.chat}} />
    );
  }
}

ReactDOM.render(<Test />, document.getElementById('main'));

