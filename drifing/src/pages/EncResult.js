import React, { Component } from 'react';

export default class EncResult extends Component {
    componentDidMount() {
        setTimeout(function() { //Start the timer
            document.getElementById("main").className = "visible-t";
        }, 10)
    }

    render() {
        return (
            <div className="container">
                <div id="main" className="hidden">
                    <p>Thank you for sharing</p>
                    <p>Your encouragement will make difference to someone</p>
                    <br/>
                    <br/>
                    <br/>
                    <p><a href="https://chiuy5.github.io/drifting/ocean/">Take some time and explore other's bottles</a></p>
                </div>

            </div>

        );
    }
}