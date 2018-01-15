import React, { Component } from 'react';
const WebSocket = require("ws");


class Formulaire extends Component {

  createMessage = event => {
    event.preventDefault();
    this.setState({
      message : event.target.value
    });
  }

  saveMessage = event => {
    event.preventDefault();

    //send message to server
    //console.log(this.state.message);
    this.ws.send(`${this.state.message}`);
}

  render() {
    return (
      <form className="form" onSubmit={this.saveMessage}>
      <textarea
        required
        onChange = {this.createMessage}
        id = "messageBox"
        >
      </textarea>
      <button type="submit">Envoyer !</button>
      </form>
    )
  }
}

export default Formulaire;
