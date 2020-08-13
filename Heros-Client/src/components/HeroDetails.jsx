import React, { Component } from "react";

class HeroDetails extends Component {
    state = {}
    render() {
        return (
            <div>
                Hero Details {this.props.match.params.id}
                <button onClick={this.goHome}>Go Home</button>
            </div>
        )
    }
    goHome = () => {
        this.props.history.push("/");
    }
}

export default HeroDetails;