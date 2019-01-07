import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { EmoteSelector } from './EmoteSelector.jsx'

export class PostMessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <textarea className="messageBox"></textarea>
        <EmoteSelector />
        <button>Post at</button>
      </div>
    );
  }
}