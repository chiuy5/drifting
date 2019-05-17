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
                    <p>Thank you for reaching out</p>
                    <p>However, we do not have the capabilities to help you directly at the moment.</p>
                    <p>Here are some resources to consider:</p>
                    <br />

                    <h4>In Case of Emergency</h4>
                    <p>If you feel like you are an immediate harm to yourself or others,</p> 
                    <p>please call 911 or go to your nearest emergency room. </p>
                    <br />
                    <br />

                    <h4>Here Are Some Reasoures In Seattle To Reach Out To</h4>
                    <p>[filler]</p>
                    <p>[filler]</p>
                    <br />
                    <br />

                    <h4>Remember</h4>
                    <p>Don't be afraid to reach out to people you know. You are not alone.</p>
                </div>
                </div>

        );
    }

}