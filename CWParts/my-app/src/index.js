import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar";
import ErrorPage from "./components/Error";
import UserAccount from "./components/UserAccount";
import Authentication from "./components/Authentication";
import ProtectedRoute from "./components/ProtectedRoute";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Auth0Provider>
      <App />
    </Auth0Provider>
    <ProtectedRoute
      path="/account"
      exact
      component={UserAccount}
    ></ProtectedRoute>
    <Route path="/auth" exact component={Authentication}></Route>
  </BrowserRouter>,
  document.getElementById("root")
);
