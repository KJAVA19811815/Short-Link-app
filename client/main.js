import { Meteor } from "meteor/meteor";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory } from "react-router";

import Signup from "../imports/ui/Signup";
import Link from "../imports/ui/Link";

class App extends Component {
  render() {
    return (
      <div>
        <Signup />
        <Link />
      </div>
    );
  }
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.getElementById("app"));
});
