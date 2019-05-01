import React, { Component } from 'react';
import './Encouragement.css';
import 'bootstrap/dist/css/bootstrap.css';
/*import { Button, Form, FormControl, FormCheck } from 'react-bootstrap';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';
import Forum from './Forum';*/
import { Link } from "react-router-dom";
//import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class Encouragement extends Component {
    // Set up a blank title and description input field
    constructor(props) {
        super(props);
        this.state = {
            emotion: "",
            exercise: "",
            body: ["", "", "", "", "", "", ""],
            tags: "",
            isPublic: true,
        };

        this.displayMessage = this.displayMessage.bind(this);

        //this.handleChange = this.handleChange.bind(this);
        //this.postBottle = this.postBottle.bind(this);
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


    addBottle = (e) => {
        e.preventDefault();
        fetch("https://api.kychiu.me/v1/ocean/ocean", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    emotion: this.state.emotion,
                    exercise: 2,
                    body: this.state.body,
                    tags: this.state.tags,
                    isPublic: this.state.isPublic
                })
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

    clearState() {
        this.setState({
            emotion: "",
            exercise: "",
            body: ["", "", "", "", "", "", ""],
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
                        emotion: this.state.emotion,
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
    }

    render() {
        return (
            <div className="container" id="exercise">


                <section id="child">
                    <div className="intro">
                        <div id="nav-links">
                            <Link to="/">Home</Link> | <Link to="/processing">Emotional Processing</Link> | <Link to="/encourage">Encourage</Link>
                        </div>

                        <h1>Encouraging Bottle</h1>
                        <br />
                        <div id="description">
                            <p>Share an encouraging message. It can be advice, a resource, a personal experience, or words of comfort</p>

                            <div id="guide">
                                Be empathetic<br />
                                Acknowledge, but not minimize, other's emotions<br />
                                Don't feel pressure to have to talk<br />
                            </div>

                            <br />
                            <br />
                            <p>Scroll or Swipe Down to Continue</p>
                            <h2>↓</h2>

                        </div>
                    </div>
                </section>


                <section id="child">
                    <form>

                        <div id="section">
                            <div className="form-group">
                                <label htmlFor="exampleFormControlTextarea1">Write some Encouragement</label>
                                <textarea className="form-control"
                                    name="0"
                                    value={this.state.body[0]}
                                    onChange={(event) => { this.handleQuestion(event) }}
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Write something here..."
                                    aria-label="some description texts">
                                </textarea>
                            </div>
                        </div>

                        <div id="section">
                            <div className="form-group">
                                <label htmlFor="formGroupExampleInput">Tags</label>
                                <input type="text" className="form-control"
                                    name="tags"
                                    value={this.state.tags}
                                    onChange={(event) => { this.handleChange(event) }}
                                    id="formGroupExampleInput"
                                    placeholder="Tag your bottle..."
                                    aria-label="Tag your bottle"
                                />
                            </div>
                        </div>
                    </form>

                    <button className="btn btn-primary mr-2" onClick={(e) => this.addBottle(e)}>
                        Public
                </button>
                    <button className="btn btn-primary mr-2" onClick={(e) => this.saveBottle(e)}>
                        Only I Can See
                </button>
                    <button className="btn btn-primary mr-2" onClick={() => this.disposeBottle()}>
                        Dispose
                </button>
                </section>
            </div>

        );
    }
}