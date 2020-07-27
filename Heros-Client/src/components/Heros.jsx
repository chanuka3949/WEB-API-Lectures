import React, { Component } from "react";
import Hero from "./Hero";

class Heros extends Component {
  state = {};
  render() {
    return (
      <div>
        <div>
          <Hero />
        </div>
        <div>
          <Hero />
        </div>
        <div>
          <Hero />
        </div>
      </div>
    );
  }
}

export default Heros;
