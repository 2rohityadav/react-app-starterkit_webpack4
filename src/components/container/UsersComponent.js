import React, { Component } from "react";

class UsersComponent extends Component {
  state = {
    users: []
  };

  render() {
    return (
      <div>
        <p>Users Component! {this.state.users.length}</p>
      </div>
    );
  }
}

export default UsersComponent;
