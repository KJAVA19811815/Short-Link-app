import React, { Component } from "react";
import { Link } from "react-router";
import { Meteor } from "meteor/meteor";

export default class Login extends Component {
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

    Meteor.loginWithPassword({ email }, password, err => {
      console.log("login callback", err);
    });
  }

  render() {
    return (
      <div>
        <h1>SHORT-LINK</h1>
        {this.state.error}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type="text" ref="email" name="email" placeholder="email" />
          <input
            type="text"
            ref="password"
            name="password"
            placeholder="password"
          />
          <button>LOGIN</button>
        </form>
        <Link to="/signup">Have an account?</Link>
      </div>
    );
  }
}
