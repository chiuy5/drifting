import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class EncResult extends Component {
    render() {
        return (
            <div className="container">
                <div id="nav-links">
                    <Link to="/">Home</Link> | <Link to="/excercise">Express</Link> | <a href="https://chiuy5.github.io/drifting/ocean/">Explore</a>
                </div>
                <div id="main">
                    <Link to="/encourage">Share some Encouragement</Link>
                    <p>or</p>
                    <a href="https://chiuy5.github.io/drifting/ocean/">Explore others' Bottles</a>
                </div>

            </div>

        );
    }
}