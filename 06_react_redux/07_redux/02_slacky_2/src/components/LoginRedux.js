import React, { Component } from "react";
import { connect } from "react-redux";

class Login extends Component {
  
  render() {
    console.log(this.props.userName)
    return (
      <div>
      <form className="Login" onSubmit={(e) => {
          e.preventDefault();
          this.props.handleSubmit(this.props.userName);
      }}>
        <div>
          Please choose a login name
        </div>
        <input
          type="text"
          onChange={this.props.handleChange}
          value={this.props.userName}
        />
        <button type="submit">Log in</button>
      </form>
      <div>
        <h1> Hello {this.props.userName} </h1>
      </div>
    </div>
    );
  }
}


function mapStateToProps(state) {
  return { userName: state.userName }
}

function mapDispatchToProps(dispatch) {
  return {
    handleChange: event => {
      dispatch({
        type: "NEW_USER",
        newUserName : event.target.value
      })
    },
    handleSubmit: (event) => {
              dispatch({
                 type: "NEW_USER",
                 newUserName : event
               })
              }
            }
}
export const ConnectedLogin = connect(mapStateToProps, mapDispatchToProps)(Login);
