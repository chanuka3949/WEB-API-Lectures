import React, { Component } from "react";
import Hero from "./Hero";

class Heros extends Component {
  state = {
    allAvengers: [
      { id: 1, likeCount: 5 },
      { id: 2, likeCount: 15 },
      { id: 3, likeCount: 15 },
    ],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.allAvengers.map((avenger) => (
            <div key={avenger.id} className="col"><Hero /></div>
          ))}
        </div>
      </div>
    );
  }
}

export default Heros;
