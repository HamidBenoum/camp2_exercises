import React, { Component } from 'react';
import { connect } from "react-redux";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
          <button onClick={ this.props.decrement }> - </button>
          <span> {this.props.counter} </span>
          <button onClick={ this.props.increment }> + </button>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { counter: state }
}

function mapDispatchToProps(dispatch) {
  return {
    decrement: () => dispatch({type: "DECREMENT"}),
    increment: () => dispatch({type: "INCREMENT"})
  }
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
