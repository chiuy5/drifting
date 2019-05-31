import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

const prompts = [
    "<b>Share some advice</b><br/>Think about a tough time you went through. What advice would’ve you want to give yourself?",
    "<b>Reflect on a personal experience</b><br/>What’s an experience that you felt that was very impactful, and what did you learn from it?",
    "<b>Offer some comforting words</b><br/>What’s a saying or quote that makes you feel relieved?",
    "<b>Suggest some resources</b><br/>What are some resources or activities that you find helpful when dealing with a tough situation?",
    "<b>Share a cheer!</b><br/>Write a saying that helps you stay motivated when things get tough!"
];

export default class Encouragement extends Component {
    // Set up a blank title and description input field
    constructor(props) {
        super(props);
        this.state = {
            emotion: "+1",
            exercise: "",
            body: [""],
            tags: "",
            isPublic: true,
        };
        this.routeChange = this.routeChange.bind(this);
    }

    routeChange(type) {
        let path = ""
        if (type === "dispose") {
            path = "/ex_dispose";
        } else {
            path = "/en_result";
        }
        this.props.history.push(path);
    }

    componentDidMount() {
        setTimeout(function () { //Start the timer
            document.getElementById("exercise").className = "container visible-t";
        }, 10)

        document.getElementById("exercise").addEventListener('scroll', this.handleScroll);

        let currPrompt = Math.floor((Math.random() * prompts.length));
        document.getElementById("prompt-box").innerHTML = prompts[currPrompt];
    }

    handleScroll() {
        let winScroll = document.getElementById("exercise").scrollLeft;
        let height = document.getElementById("exercise").scrollWidth - document.getElementById("exercise").clientWidth;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    }

    getPrompt(event) {
        event.preventDefault();
        let currPrompt = Math.floor((Math.random() * prompts.length));
        let promptBox = document.getElementById("prompt-box");


        promptBox.innerHTML = prompts[currPrompt];
    }


    // Add a method to handle changes to any input element
    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        console.log(field, value);
        let change = {};
        change[field] = value;
        this.setState(change);
    }

    handleQuestion(event) {
        let index = event.target.name;
        let value = event.target.value;
        console.log(index, value);
        let change = this.state.body;
        change[index] = value;
        this.setState({ body: change }, () => {
            console.log("body", this.state.body);
        });
    }

    scrollLeft = (e, clsName) => {
        e.preventDefault();
        document.getElementById("exercise").scrollLeft -= 600;
    }

    scrollRight = (e, id) => {
        e.preventDefault();
        document.getElementById("exercise").scrollLeft += 600;
        let currEl = document.getElementById(id);
        currEl.className = "child visible";
    }

    addBottle = (e) => {
        e.preventDefault();
        if (!this.state.body || this.state.body[0].length === 0) {
            alert("Cannot post an empty encouragement");
        } else {
            fetch("https://api.kychiu.me/v1/ocean/ocean", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        emotion: "+1",
                        exercise: 2,
                        body: this.state.body,
                        tags: this.state.tags,
                        isPublic: this.state.isPublic
                    })
            }).then(res => {
                return res.json();
            }).then((data) => {
                this.clearState();
                this.routeChange("post");
            }).catch((err, data) => {
                console.log(err);
            });
        }
    }

    clearState() {
        this.setState({
            emotion: "",
            exercise: "",
            body: [""],
            tags: "",
            isPublic: ""
        });
    }

    postBottle() {
        //this.setState({type: "public"});
        this.setState(
            { isPublic: true },
            () => {
                console.log("post", this.state);
                this.addBottle();
            }
        );
    }


    disposeBottle() {
        this.clearState();
        this.routeChange("dispose");
    }

    render() {
        return (
            <div className="container">
                <div className="container hidden" id="exercise">


                    <section className="child visible" id="s0">
                        <div className="intro">


                            <h1>Encouraging Bottle</h1>
                            <div id="description">
                                <p><i>Share an encouraging message and brighten someone’s day!</i></p>
                                <br />

                                <div id="guide">
                                    <h5>Helpful Reminders</h5>
                                    <ul>
                                        <li>Be empathetic</li>
                                        <li>Acknowledge, but not minimize, other's emotions</li>
                                        <li>Don’t feel pressured to overshare</li>
                                    </ul>
                                </div>
                                <br />
                            </div>

                            <div id="buttons">
                                <button id="right-button" className="btn btn-primary mr-2" onClick={(e) => this.scrollRight(e, "s1")}>
                                    Continue →
                                 </button>
                            </div>
                        </div>
                    </section>


                    <section className="child hidden" id="s1">
                        <form>
                            <div id="section">
                                <div className="suggestions">
                                    <div id="prompt-box" className="visible"></div>
                                    <div id="prompt-btn-holder">
                                        <button className="btn btn-outline-primary btn-sm" id="prompt-button" aria-pressed="false" onClick={(event) => this.getPrompt(event)}>
                                            Get Prompt
                                        </button>
                                    </div>

                                </div>
                                <div className="form-group">
                                    <textarea className="form-control box-input"
                                        name="0"
                                        value={this.state.body[0]}
                                        onChange={(event) => { this.handleQuestion(event) }}
                                        rows="3"
                                        placeholder="Write something here..."
                                        aria-label="some description texts">
                                    </textarea>
                                </div>
                            </div>

                            <div id="section">
                                <div className="form-group">
                                    <label htmlFor="formGroupExampleInput">Tags</label>
                                    <input type="text" className="form-control box-input"
                                        name="tags"
                                        value={this.state.tags}
                                        onChange={(event) => { this.handleChange(event) }}
                                        placeholder="Tag your bottle (Seperate each tag by a comma)"
                                        aria-label="Tag your bottle"
                                        required
                                    />
                                </div>
                            </div>
                        </form>


                        <div id="buttons">
                            <button id="left-button" className="btn btn-primary mr-2" onClick={(e) => this.scrollLeft(e)}>
                                ←
                            </button>
                            <button className="btn btn-primary mr-2" title="Post your bottle publically" onClick={(e) => this.addBottle()}>
                                Share
                         </button>
                            <button className="btn btn-primary mr-2" title="Set your bottle free" onClick={() => this.disposeBottle()}>
                                Release
                        </button>
                        </div>
                    </section>
                </div>

                <div className="progress-container">
                    <div className="progress-bar" id="myBar"></div>
                </div>
            </div>
        );
    }
}