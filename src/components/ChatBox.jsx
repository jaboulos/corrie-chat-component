import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import autoscroll from 'autoscroll-react';
import { Chat } from './Chat.jsx';

/*
onScrolled={e => console.log("the list was scrolled!")}
                onScrolledTop={e => alert("scrolled to top!")}
*/

const ChatBoxStyle = styled.div`
  padding: 10px;
  height: 530px;
  overflow-x: hidden;
  overflow-y: scroll;
`;

class ChatBox extends React.Component {
  render() {
    return (
      <ChatBoxStyle {...this.props} >
        { this.props.chatsArray.length ? this.props.chatsArray.map(twitchChat => {
          return <Chat chat={twitchChat}/>;
        }) : null }
      </ChatBoxStyle>
    );
  }
}

export default autoscroll(ChatBox);