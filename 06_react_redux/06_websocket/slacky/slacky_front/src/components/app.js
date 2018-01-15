import React, { Component } from 'react';
import '../App.css';
// import Message from './message';
// import Formulaire from './formulaire';
import Connexion from './connexion';


class App extends Component {
constructor(props) {
  super(props);
  this.ws = new WebSocket("ws://localhost:3001");
  this.state = {
    username:""
  }
}

  componentDidMount() {

    // What to do when we receive a message?
    this.ws.onmessage = (event) => {
      console.log(event.data);
    };

    // Alert the server that the client is gone
    window.addEventListener("beforeunload", () => this.ws.send("CLOSE"));
  }

  connect = (userName) => {
     const newUserName = userName;
     console.log("newuserName",newUserName);

     this.setState({
       userName:newUserName
     },() => {
       // We send a message to server when we connect
       console.log(`User ${this.state.userName} is connected.`);
       this.ws.send(`User ${this.state.userName} is connected.`);
     });
   }

  render() {
    return (
      <div className="App">
        <div className="container">
                <Connexion
                  username :


                  />
        </div>
      </div>
    );
  }
}

export default App;
