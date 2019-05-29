import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class Exercise extends Component {
    // Set up a blank title and description input field
    componentDidMount() {
        setTimeout(function() { //Start the timer
            document.getElementById("main").className = "visible";
        }, 10)
    }

    render() {
        return (
            <div className="container">
                <div id="main" className="hidden">
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