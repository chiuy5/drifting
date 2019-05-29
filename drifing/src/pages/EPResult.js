import React, { Component } from 'react';

export default class EPResult extends Component {
    componentDidMount() {
        setTimeout(function() { //Start the timer
            document.getElementById("main").className = "visible-t";
        }, 10)
    }


    render() {
        return (
            <div className="container">
                <div id="main" className="hidden">
                    <p>Thank you for completing the exercise</p>
                    <p>Expressing your thoughts is a big step for taking care of yourself</p>
                    <p>Remember, it'll be alright</p>
                    <br />
                    <br />
                    <p><a href="https://chiuy5.github.io/drifting/ocean/">Take some time and explore other's bottles</a></p>
                </div>
            </div>
        );
    }
}