import React, { Component } from "react";
import { browserHistory } from "react-router";

export default class Link extends Component {
  onLogout() {
    browserHistory.push("/");
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
