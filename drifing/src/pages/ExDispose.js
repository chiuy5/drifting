import React, { Component } from 'react';

export default class ExDispose extends Component {
    componentDidMount() {
        setTimeout(function() { //Start the timer
            document.getElementById("main").className = "visible";
        }, 10)
    }


    render() {
        return (
            <div className="container">
                <div id="main" className="hidden">
                    <p>Thank you for completing the exercise</p>
                    <p>Even if you didn't choose to share your bottle</p>
                    <p>We hope you're able to feel better</p>
                    <br/>
                    <br/>
                    <p><a href="https://chiuy5.github.io/drifting/ocean/">Take some time and explore other's bottles</a></p>
                </div>

            </div>

        );
    }
}