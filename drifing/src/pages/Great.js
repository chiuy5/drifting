import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Great extends Component {
    componentDidMount() {
        setTimeout(function() { //Start the timer
            document.getElementById("main").className = "visible-t";
        }, 10)
    }


    render() {
        return (
            <div className="container">
                <div id="main" className="hidden">
                    <Link to="/encourage">Share some Encouragement</Link>
                    <p>or</p>
                    <a href="https://chiuy5.github.io/drifting/ocean/">Explore others' Bottles</a>
                </div>

            </div>

        );
    }
}