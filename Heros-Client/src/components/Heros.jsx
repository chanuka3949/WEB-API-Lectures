import React, { Component } from "react";
import Hero from "./Hero";
import axios from "axios";

class Heros extends Component {
  state = {
    allAvengers: [],
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.allAvengers.map((avenger) => (
            <div className="col" key={avenger._id}>
              <Hero avenger={avenger} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  async componentDidMount() {
    let { data } = await axios.get("http://localhost:5000/api/heros");

    // let avengers = data.map((avenger) => {
    //   return {
    //     id: avenger._id,
    //     likeCount: avenger.likeCount,
    //     imageUrl: avenger.imageUrl,
    //     birthName: avenger.birthName,
    //     movies: avenger.movies,
    //   };
    // });
    this.setState({ allAvengers: data });
  }
}

export default Heros;
