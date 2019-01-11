import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { EmoteSelector } from './EmoteSelector.jsx';
import { HappyFaceIcon } from './HappyFaceIcon.jsx';

const TextBoxContainer = styled.div`
  box-shadow: inset 0 1px 0 0 #dad8de;
  padding: 10px 20px 20px 20px;
`;

const TextBox = styled.div`
  background: #fff;
  height: 45px;
  border: 1px solid #dad8de;
  border-radius: 4px;
  color: #433f4a;
  line-height: 1.5;
  outline: 0;
  transition: box-shadow 0.1s ease-in, border 0.1s ease-in;
  position: relative;
`;

const TextArea = styled.textarea`
  padding: 5px 0px 5px 10px;
  border: none;
  color: #433f49;
  resize: none;
  font-family: inherit;
  outline: none;
  width: 95%;
`;

const PostButtonContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding-top: 8px;
`;

const PostButton = styled.button`
  height: 30px;
  width: 45px;
  background: #6441a4;
  border: 1px solid transparent;
  border-radius: 4px;
  color: #fff;
  font-family: inherit;
`;

export class PostMessageBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chat: '',
      emoteSelector: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleEmoteSelector = this.toggleEmoteSelector.bind(this);
    this.renderEmoteSelector = this.renderEmoteSelector.bind(this);
  }

  handleChange(e) {
    const chat = e.target.value;
    this.setState({ chat });
  }

  handleClick(e) {
    this.props.postMessage(this.state.chat);
    const clearTextArea = document.getElementById('textBox');
    clearTextArea.value = '';
  }

  toggleEmoteSelector() {
    console.log('CLICKED DUDE');
    this.setState(prevState => {
      return {emoteSelector: !prevState.emoteSelector};
    });
  }

  renderEmoteSelector() {
    return this.state.emoteSelector ? <EmoteSelector /> : null;
  }

  render() {
    console.log('🗺 state: ', this.state);
    return (
      <TextBoxContainer>
        <TextBox>
          <TextArea id="textBox" placeholder="Post a message" onChange={e => this.handleChange(e)}/>
          <HappyFaceIcon clickHandler={this.toggleEmoteSelector} />
          {this.renderEmoteSelector()}
        </TextBox>
        <PostButtonContainer>
          <PostButton id="postButton" onClick={e => this.handleClick(e)}>
            Chat
          </PostButton>
        </PostButtonContainer>
      </TextBoxContainer>
    );
  }
}
