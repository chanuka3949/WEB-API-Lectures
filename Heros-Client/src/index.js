import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import NavBar from "./components/NavBar";
import Heros from "./components/Heros";
import Home from "./components/Home";
import HeroDetails from "./components/HeroDetails";

ReactDOM.render(
  <BrowserRouter>
    <NavBar />
    <Route path="/" exact component={Home}/>
    <Route path="/heroes/" exact component={Heros}/>
    <Route path="/heroes/:id" exact component={HeroDetails}/>
  </BrowserRouter>,
  document.getElementById("root")
);
