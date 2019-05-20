import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class ExDispose extends Component {
    render() {
        return (
            <div className="container">
                <div id="nav-links">
                    <Link to="/">Home</Link> | <Link to="/excercise">Express</Link> | <a href="https://chiuy5.github.io/drifting/ocean/">Explore</a>
                </div>
                <div id="main">
                    <p>Thank you for completing the exercise</p>
                    <p>Even if you didn't choose to share your bottle</p>
                    <p>We hope you're able to feel better</p>
                    <br/>
                    <br/>
                    <p><a href="https://chiuy5.github.io/drifting/ocean/">Take some time and explore other's bottles</a></p>
                </div>

            </div>

        );
    }
}