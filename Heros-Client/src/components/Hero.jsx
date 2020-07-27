import React, { Component } from "react";

class Hero extends Component {
  state = {
    likeCount: this.props.likeCount,
  };
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        {/* <img
                    src="https://www.hiclipart.com/free-transparent-background-png-clipart-qmhez"
                    className="card-img-top"
                /> */}
        <div className="card-body">
          <h5 className="card-title">{this.props.name}</h5>
            <h6>{this.props.avenger.birthName}</h6>
          <ul className="card-text">{this.props.avenger.movies}</ul>
          <button
            className="btn btn-primary"
            onClick={() => {
              this.likeAvenger(1);
            }}
          >
            Like{" "}
            <span className="badge badge-light">{this.state.likeCount}</span>
          </button>
        </div>
      </div>
    );
  }
  isHero() {
    //if (this.state.heroId < 0) return "Not an avenger";
    //else return "Is an avenger";
    return this.state.heroId < 0 ? "Not an avenger" : "Is an avenger";
  }
  showMoviews() {
    if (this.state.movies.length === 0) return <p>No movies available</p>;
    return this.state.movies.map((movie) => (
      <li key={this.state.movies.indexOf(movie)}>{movie}</li>
    ));
  }
  likeAvenger = (likeCounter) => {
    this.setState({ likeCount: this.state.likeCount + likeCounter });
  };
}

export default Hero;
