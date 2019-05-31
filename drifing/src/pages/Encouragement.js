import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

const prompts = [
    "<b>Share Some Advice:</b><br/>Think about a tough time you went through. What’s the advice you would’ve want a friend to tell you or some reasons you found that was helpful?", "<b>Share a personal experience:</b><br/>What’s something that you went through and what did you learn from it?", "<b>Share some words of comfort:</b><br/> What’s a saying or quote that makes you feel relieved?", "<b>Share some resources:</b><br/> What"
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

        //this.displayMessage = this.displayMessage.bind(this);

        //this.handleChange = this.handleChange.bind(this);
        //this.postBottle = this.postBottle.bind(this);
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
            console.log("bottle", data);
            this.clearState();
            this.routeChange("post");
        }).catch((err, data) => {
            console.log(err);
        });
    }

    clearState() {
        this.setState({
            emotion: "",
            exercise: "",
            body: [""],
            tags: "",
            isPublic: ""
        }, () => {
            console.log("empty", this.state);
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

    saveBottle = (e) => {
        e.preventDefault();
        this.setState(
            { isPublic: false },
            () => {
                console.log("save", this.state);
                //this.addBottle();
                fetch("https://api.kychiu.me/v1/ocean/ocean", {
                    method: "POST",
                    body:
                    {
                        emotion: "+1",
                        exercise: 2,
                        body: this.state.body,
                        tags: this.state.tags,
                        isPublic: this.state.isPublic
                    }
                }).then(res => {
                    return res.json();
                }).then((data) => {
                    console.log("bottle1", data);
                    this.clearState();
                }).catch((err, data) => {
                    console.log(err);
                    console.log("bottle2", data);
                });
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
                                        <li>Don't feel pressure to have to talk</li>
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
                            <button className="btn btn-primary mr-2" onClick={(e) => this.addBottle(e, "s0")}>
                                Post
                         </button>
                            {/* <button className="btn btn-primary mr-2" onClick={(e) => this.saveBottle(e)}>
                            Only I Can See
                        </button> */}
                            <button className="btn btn-primary mr-2" onClick={() => this.disposeBottle()}>
                                Dispose
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