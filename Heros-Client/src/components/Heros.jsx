import React, { Component } from "react";
import axios from "axios";
import Hero from "./Hero";

class Heros extends Component {
  state = {
    allAvengers: []
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.allAvengers.map((avenger) => (
            <div key={avenger.id} className="col">
              <Hero likeCount={avenger.likeCount} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  async componentDidMount() {
    let { data } = await axios.get("http://localhost:5000/api/heros");
    console.log(data);

    let avengers = data.map((avenger) => {
      return {
        id: avenger._id,
        imgUrl: avenger.imgUrl,
        name: avenger.name,
      };
    });
    this.setState({ allAvengers: avengers });
  }
}

export default Heros;
