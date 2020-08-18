import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import {Authentication}  from "./Authentication"

class ProtectedRoute extends Component {
  render() {
    if (Authentication.isAuthenticated === true) {
      return <Route></Route>;
    } else {
      <Redirect
        to={{ pathname: "/login", state: { from: this.props.location } }}
      ></Redirect>;
    }
  }
}

export default ProtectedRoute;
