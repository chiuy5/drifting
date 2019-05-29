import React, { Component } from 'react';
import { Link } from "react-router-dom";
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Home extends Component {
    // Set up a blank title and description input field
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        setTimeout(function() { //Start the timer
            document.getElementById("front").className = "visible-t";
        }, 10)
    }

    render() {
        return (
            <div className="container">
                <div className="homepage">
                    <div id="front" className="hidden">
                        <a href="./">
                            <img src="drifting_logo.png" className="drifting-logo" alt="Drifting"/></a>
                        <br />

                        <div id="main">
                            <p>How are you feeling right now?</p>
                            <div className="links-nav">
                                <div><Link to="/great">Great</Link></div>
                                <div><Link to="/processing">Worse than Usual</Link></div>
                                <div><Link to="/crisis">In Crisis</Link></div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <a href="https://chiuy5.github.io/drifting/ocean/">Or do you want to explore first?</a>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}