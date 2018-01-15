import React, { Component } from 'react';

class Message extends Component {
  render(){
    return(
      <p classname = "user-message">
      {this.props.pseudo} : mon message.
      </p>
    )
  }
}

export default Message;
