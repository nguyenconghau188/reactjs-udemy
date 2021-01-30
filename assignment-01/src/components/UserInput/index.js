import React, { Component } from "react";

class UserInput extends Component {
  state = {
    username: "",
  };

  handleUserInput = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onSubmitUsername = () => {
    this.props.handleInputUsername(this.state.username);
    this.setState({
      username: "",
    });
  };

  render() {
    return (
      <segment>
        Username:
        <input
          type="text"
          onChange={this.handleUserInput}
          value={this.state.username}
        />
        <button onClick={this.onSubmitUsername}>Add username</button>
      </segment>
    );
  }
}

export default UserInput;
