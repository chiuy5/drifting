import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Exercise extends Component {
    // Set up a blank title and description input field
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <div id="main">
                    What would you like to do?
                    <br />
                    <br />
                    <div id="nav-link">
                        <Link to="/processing">Emotional Processing</Link><br />
                        <Link to="/encourage">Encourage</Link><br />
                    </div>

                </div>
            </div>
        );
    }
}