import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { twitchChatGenerator } from '../functions/chatGenerator.js';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {chat: ''};

    this.test = this.test.bind(this);
  }

  test() {
    this.setState(twitchChatGenerator());
  }

  componentDidMount() {
    this.interval = setInterval(() => this.test(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <h3>{this.state.chat}</h3>;
  }
}

ReactDOM.render(<Test />, document.getElementById('main'));

