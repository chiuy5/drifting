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
                        {/*<Link to="/processing">Explore</Link>*/} Explore | <Link to="/exercise">Reflect</Link>
                    </div>

                </div>
            </div>

        );
    }
}