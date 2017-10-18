import React, { Component } from "react";
import { Link } from "react-router";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ""
    };
  }
  onSubmit(e) {
    e.preventDefault();

    this.setState({
      error: "something went wrong"
    });
  }
  render() {
    return (
      <div>
        <h1>SIGN UP OR REGISTER</h1>
        {this.state.error}
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" name="email" placeholder="email" />
          <input type="text" name="password" placeholder="password" />
          <button>CREATE ACCOUNT</button>
        </form>
        <Link to="/">LOGIN</Link>
      </div>
    );
  }
}
