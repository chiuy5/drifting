import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Exercise extends Component {
    // Set up a blank title and description input field
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div id="nav-links">
                <Link to="/">Home</Link> | <Link to="/excercise">Express</Link> | <a href="https://chiuy5.github.io/drifting/ocean/">Explore</a>
                </div>
                <div id="main">
                    What would you like to do?
                    <br />
                    <br />
                    <div id="nav-link">
                        {/*<a href="/processing">Emotional Processing </a> | <a href="/encourage">Encourage</a>*/}
                        <Link to="/processing">Emotional Processing</Link><br />
                        <Link to="/encourage">Encourage</Link><br />
                    </div>

                </div>
            </div>
        );
    }
}