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
                <div id="front">
                    What would you like to do?
                    <br />
                    <br />
                    <div id="nav-link">
                        {/*<a href="/processing">Emotional Processing </a> | <a href="/encourage">Encourage</a>*/}
                        <Link to="/processing">Emotional Processing</Link><br />
                        <Link to="/encourage">Encourage</Link><br />
                        <br />
                        <br />                    
                        <br />
                        <br />                    
                        <br />
                        <br />
                        <br />
                        <br />
                        <Link to="/">Back to Home</Link><br />
                    </div>

                </div>
            </div>

        );
    }
}