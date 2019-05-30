import React, { Component } from 'react';
import { Link } from "react-router-dom";



export default class NavBar extends Component {
    render() {
        return (
            <div id="nav-links">
                <Link to="/">Home</Link> | <Link to="/excercise">Express</Link> | <Link to="/forum">Explore</Link>
            </div>
        );
    }
}
