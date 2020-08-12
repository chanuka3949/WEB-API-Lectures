import React, { Component } from "react";

class Hero extends Component {
  state = {
    // heroId: this.props.avenger.id
  };
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.props.avenger.imageUrl} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">Avengers Name</h5>
          <h6>Avenger Birth Name</h6>
          <ul className="card-text">{this.showMoviews()}</ul>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.likeAvenger(1);
            }}
          >
            Like{" "}
            <span className="badge badge-light">{this.props.avenger.likeCount}</span>
          </button>
        </div>
      </div>
    );
  }
  isHero() {
    //if (this.state.heroId < 0) return "Not an avenger";
    //else return "Is an avenger";
    return this.props._id < 0 ? "Not an avenger" : "Is an avenger";
  }
  showMoviews() {
    if (this.props.avenger.movies.length === 0) return <p>No movies available</p>;
    return this.props.avenger.movies.map((movie) => (
      <li key={this.props.avenger.movies.indexOf(movie)}>{movie}</li>
    ));
  }
  likeAvenger = (likeCounter) => {
    this.setState({ likeCount: this.likeCount + likeCounter });
  };
}

export default Hero;
