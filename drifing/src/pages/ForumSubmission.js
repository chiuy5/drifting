import React, { Component } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Mindfulness from "./../components/Mindfulness";


export default class ForumSubmission extends Component {
    // Set up a blank title and description input field
    constructor(props) {
        super(props);
        this.state = {
            emotion: "",
            exercise: "",
            body: ["", "", "", "", "", ""],
            tags: "",
            isPublic: true,
        };

        this.routeChange = this.routeChange.bind(this);
        this.displayMessage = this.displayMessage.bind(this);

        //this.handleChange = this.handleChange.bind(this);
        //this.postBottle = this.postBottle.bind(this);
    }


    routeChange(type) {
        let path = ""
        if (type === "dispose") {
            path = "/ex_dispose";
        } else {
            path = "/ep_result";
        }
        this.props.history.push(path);
    }

    componentDidMount() {
        document.getElementById("exercise").addEventListener('scroll', this.handleScroll);

        let checkbox = document.getElementById("dsc-check");
        checkbox.addEventListener( 'change', function() {
            if(this.checked) {
                let desc = document.getElementsByClassName("q-desc hidden");
                console.log(desc);
                Array.from(desc).forEach(function (d){
                    d.className = "q-desc visible";
                });

            } else {
                let desc = document.getElementsByClassName("q-desc visible");
                console.log(desc);
                Array.from(desc).forEach(function (d){
                    d.className = "q-desc hidden";
                });
            }
        });
    }

    handleScroll() {
        let winScroll = document.getElementById("exercise").scrollLeft;
        let height = document.getElementById("exercise").scrollWidth - document.getElementById("exercise").clientWidth;
        let scrolled = (winScroll / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
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

    // Function for submit and display the user input message
    displayMessage(event) {
        event.preventDefault();
        let message = {}
        this.setState({
            message: this.state.body
        }
            // }, () => {
            //     console.log("message", this.state.message);
        )

        fetch("https://api.kychiu.me/v1/ocean/ocean", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        }).then(res => {
            return res.text();
        }).then((data) => {

            this.setState({
                message: data
            })

        }).catch((err, data) => {
            console.log(err);
            console.log("message1", data);
        });

    }

    /*I have no idea why .scrollRight += 300 doesn't work*/
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
        /*console.log(this.state.isPublic);
        let bottle = {
            emotion: this.state.emotion,
            exercise: this.state.exercise,
            body: this.state.body,
            tags: this.state.tags,
            isPublic: this.state.isPublic,
        }*/

        //console.log(bottle);
        e.preventDefault();
        fetch("https://api.kychiu.me/v1/ocean/ocean", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    emotion: "-1",
                    exercise: 1,
                    body: this.state.body,
                    tags: this.state.tags,
                    isPublic: true //this.state.isPublic
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
            body: ["", "", "", "", "", ""],
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
                        emotion: "-1",
                        exercise: this.state.exercise,
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

                <div className="description-checkbox">
                    <label><input type="checkbox" id="dsc-check" /> Show Description</label>
                </div>

                <form id="exercise" className="container">


                    <section className="child visible" id="s0" >
                        <div className="intro">


                            <h1>New Bottle</h1>

                            <div id="description">
                                <br />
                                <p>Go through the following exercise to sort out what's on your mind</p>
                                <p>You are free to go at your own pace and skip any questions you want</p>
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
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">(1/6) What's on your mind?</label>
                            <div className="q-desc hidden">Description</div>
                            <textarea id="text-box" className="form-control"
                                name="0"
                                value={this.state.body[0]}
                                onChange={(event) => { this.handleQuestion(event) }}

                                rows="3"
                                placeholder="Write about something on your mind (for example: I failed my exam) ..."
                                aria-label="some description texts">
                            </textarea>
                        </div>

                        <div id="buttons">
                            <button id="left-button" className="btn btn-primary mr-2" onClick={(e) => this.scrollLeft(e, "s0")}>
                                ←
                                </button>
                            <button id="right-button" className="btn btn-primary mr-2" onClick={(e) => this.scrollRight(e, "s2")}>
                                →
                                 </button>
                        </div>
                    </section>

                    <section className="child hidden" id="s2">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1">(2/6) Could the situation be worse than it is? And how so?</label>
                            <div className="q-desc hidden">Description</div>
                            <textarea id="text-box" className="form-control"
                                name="1"
                                value={this.state.body[1]}
                                onChange={(event) => { this.handleQuestion(event) }}

                                rows="3"
                                placeholder="Think about what could be the worse case scenario for your situation (i.e. I failed the course) ..."
                                aria-label="some description texts">
                            </textarea>
                        </div>

                        <div id="buttons">
                            <button id="left-button" className="btn btn-primary mr-2" onClick={(e) => this.scrollLeft(e, "s1")}>
                                ←
                                </button>
                            <button id="right-button" className="btn btn-primary mr-2" onClick={(e) => this.scrollRight(e, "s3")}>
                                →
                                 </button>
                        </div>
                    </section>

                    <section className="child hidden" id="s3">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1"> (3/6) What are some factors that contributed to the situation?</label>
                            <div className="q-desc hidden">Description</div>
                            <textarea id="text-box" className="form-control"
                                name="2"
                                value={this.state.body[2]}
                                onChange={(event) => { this.handleQuestion(event) }}

                                rows="3"
                                placeholder="There may be outside factors to consider that have you feel this way (i.e. I didn't get enough sleep, )"
                                aria-label="some description texts">

                            </textarea>
                        </div>

                        <div id="buttons">
                            <button id="left-button" className="btn btn-primary mr-2" onClick={(e) => this.scrollLeft(e, "s2")}>
                                ←
                                </button>
                            <button id="right-button" className="btn btn-primary mr-2" onClick={(e) => this.scrollRight(e, "s4")}>
                                →
                                 </button>
                        </div>
                    </section>

                    <section className="child hidden" id="s4">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1"> (4/6) What factors in the situation are in your control?</label>
                            <div className="q-desc hidden">Description</div>
                            <textarea id="text-box" className="form-control"
                                name="3"
                                value={this.state.body[3]}
                                onChange={(event) => { this.handleQuestion(event) }}

                                rows="3"
                                placeholder="Think about the things you put for the previous prompt and which of those things you can address"
                                aria-label="some description texts">
                            </textarea>
                        </div>

                        <div id="buttons">
                            <button id="left-button" className="btn btn-primary mr-2" onClick={(e) => this.scrollLeft(e, "s3")}>
                                ←
                                </button>
                            <button id="right-button" className="btn btn-primary mr-2" onClick={(e) => this.scrollRight(e, "s5")}>
                                →
                                 </button>
                        </div>
                    </section>

                    <section className="child hidden" id="s5">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1"> (5/6) Can you brainstorm solutions you can do to address your situation?</label>
                            <textarea id="text-box" className="form-control"
                                name="4"
                                value={this.state.body[4]}
                                onChange={(event) => { this.handleQuestion(event) }}

                                rows="3"
                                placeholder="Think of some resources you can use or actions you can do"
                                aria-label="some description texts">
                            </textarea>
                        </div>

                        <div id="buttons">
                            <button id="left-button" className="btn btn-primary mr-2" onClick={(e) => this.scrollLeft(e, "s4")}>
                                ←
                                </button>
                            <button id="right-button" className="btn btn-primary mr-2" onClick={(e) => this.scrollRight(e, "s6")}>
                                →
                                 </button>
                        </div>
                    </section>

                    <section className="child hidden" id="s6">
                        <p> Take some time to complete this mindfulness exercise</p>

                        <Mindfulness />

                        <p>Or go right to skip → </p>
                        <div id="buttons">
                            <button id="left-button" className="btn btn-primary mr-2" onClick={(e) => this.scrollLeft(e, "s5")}>
                                ←
                                </button>
                            <button id="right-button" className="btn btn-primary mr-2" onClick={(e) => this.scrollRight(e, "s7")}>
                                →
                                 </button>
                        </div>
                    </section>

                    <section className="child hidden" id="s7">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlTextarea1"> (6/6) How do you feel now?</label>
                            <textarea id="text-box" className="form-control"
                                name="5"
                                value={this.state.body[5]}
                                onChange={(event) => { this.handleQuestion(event) }}

                                rows="3"
                                aria-label="some description texts">
                            </textarea>
                        </div>

                        <div className="form-group">
                            <label htmlFor="formGroupExampleInput">Tags</label>
                            <input type="text" id="text-box" className="form-control"
                                name="tags"
                                value={this.state.tags}
                                onChange={(event) => { this.handleChange(event) }}
                                id="text-box"
                                placeholder="Tag your bottle (Seperate each tag by a comma)"
                                aria-label="Tags for your bottle"
                            />
                        </div>

                        <div id="buttons">
                            <button id="left-button" className="btn btn-primary mr-2" onClick={(e) => this.scrollLeft(e, "s6")}>
                                ←
                            </button>
                            <button className="btn btn-primary mr-2" data-toggle="tooltip" data-placement="top" title="Tooltip on top" onClick={(e) => { this.addBottle(e) }}>
                                Share
                         </button>
                            <button className="btn btn-primary mr-2" data-toggle="tooltip" data-placement="top" title="Tooltip on top" onClick={() => this.disposeBottle()}>
                                Release
                        </button>
                        </div>
                    </section>
                </form>



                <div className="progress-container">
                    <div className="progress-bar" id="myBar"></div>
                </div>
            </div>



        );
    }
}