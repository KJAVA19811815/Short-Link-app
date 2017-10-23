import React, { Component } from "react";
import { Accounts } from "meteor/accounts-base";

export default class Link extends Component {
  onLogout() {
    Accounts.logout();
  }
  render() {
    return (
      <div>
        <h1>LINKS</h1>
        <button onClick={this.onLogout.bind(this)}>LOGOUT</button>
      </div>
    );
  }
}
