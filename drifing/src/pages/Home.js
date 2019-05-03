import React, { Component } from 'react';
import {Link} from "react-router-dom";
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Home extends Component {
    // Set up a blank title and description input field
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div id="front">
                    <a href="./">
                        <img src="drifting-logo.jpg" className="drifting-logo" /></a>
                    <br />

                    <div id="nav-link">
                        {/*<a href="/processing">Emotional Processing </a> | <a href="/encourage">Encourage</a>*/}
                        <a href="https://chiuy5.github.io/drifting/ocean/">Explore</a> | <Link to="/exercise">Reflect</Link>
                    </div>

                </div>
            </div>

        );
    }
}