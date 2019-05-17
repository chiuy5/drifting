import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Crisis extends Component {
    // Set up a blank title and description input field
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div id="nav-links">
                    <Link to="/">Home</Link> | <a href="https://chiuy5.github.io/drifting/ocean/">Explore</a> | <Link to="/excercise">Express</Link>
                </div>
                <div id="main">
                    <p>[Work in Progress]</p>
                    <p>Feature list of local crisis / emergency resources</p>
                </div>
                </div>

        );
    }

}