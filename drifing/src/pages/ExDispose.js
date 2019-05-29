import React, { Component } from 'react';

export default class ExDispose extends Component {
    componentDidMount() {
       /*setTimeout('', 5000);        
        document.getElementById("main").className="visible";*/
    }


    render() {
        return (
            <div className="container">
                <div id="main" className="visible">
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