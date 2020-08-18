import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
    state = {}
    render() {
        return(
            <nav>
               <Link to="/">Home</Link>
               <Link to="/account">Account</Link>
               <Link to="/auth">Login/Logout</Link>
            </nav>
        )
    }
}

export default NavBar