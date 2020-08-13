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
              <Hero avenger={avenger} onDelete={() => this.deleteAvenger(avenger._id)} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  async deleteAvenger(avengerId) {
    console.log(avengerId)
    await axios.delete(`http://localhost:5000/api/heros/${avengerId}`);
    let newAvengers = this.state.allAvengers.filter((avenger) => avenger._id !== avengerId);
    this.setState({allAvengers: newAvengers})
  }

  async likeAvenger(avenger) {
    await axios.put(`http://localhost:5000/api/heros/${avenger._id}`)
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
