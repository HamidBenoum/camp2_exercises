import React, { Component } from 'react';

class Connexion extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
  this.props.onSubmit(this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <div className="Connexionbox">
          <form className="connexion" onSubmit={this.handleSubmit}>
            <input
            type="text"
            placeholder="Pseudo"
            required
            value={this.state.value}
            onChange={this.handleChange}
            />
            <button type="submit">Go !</button>
          </form>
      </div>
    )
  }
}

export default Connexion;
