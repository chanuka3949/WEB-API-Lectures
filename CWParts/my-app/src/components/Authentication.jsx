import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Auth0Provider } from '@auth0/auth0-react';

class Authentication extends Component {
  state = {
      isAuthenticated: false
  };
  render() {
    return (
      <div>
        <p>You must log in to view the page</p>
        <button>Log in</button>
      </div>
    );
  }
}

export default Authentication;
