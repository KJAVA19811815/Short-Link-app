import React, { Component } from "react";
import { Link } from "react-router";
import { Accounts } from "meteor/accounts-base";

export default class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: ""
    };
  }
  onSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value.trim();
    let password = this.refs.password.value.trim();

    Accounts.createUser({ email, password }, err => {
      console.log("sign up callback", err);
    });

    // this.setState({
    //   error: "something went wrong"
    // });
  }
  render() {
    return (
      <div>
        <h1>SIGN UP OR REGISTER</h1>
        {this.state.error}
        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="email" name="email" placeholder="email" />
          <input
            type="text"
            ref="password"
            name="password"
            placeholder="password"
          />
          <button>CREATE ACCOUNT</button>
        </form>
        <Link to="/">LOGIN</Link>
      </div>
    );
  }
}
