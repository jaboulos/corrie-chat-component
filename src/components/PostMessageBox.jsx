import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { EmoteSelector } from './EmoteSelector.jsx';
import styled from 'styled-components';

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
  transition: box-shadow .1s ease-in,border .1s ease-in;
`;

const TextArea = styled.textarea`
  padding: 5px 0px 5px 10px;
  border: none;
  color: #433F49;
  resize: none;
  font-family: inherit;
  outline: none;
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
    this.state = {};
  }
  render() {
    return (
      <TextBoxContainer>
        <TextBox>
          <TextArea placeholder="Post a message"></TextArea>
          <EmoteSelector />
        </TextBox>
        <PostButtonContainer>
          <PostButton>Chat</PostButton>
        </PostButtonContainer>
      </TextBoxContainer>
    );
  }
}