import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
/* import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button, Form, FormControl, Container, Image } from 'react-bootstrap'; */
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import { CSSTransition } from "react-transition-group-v2";


import ForumSubmission from "./pages/ForumSubmission";
import Encouragement from "./pages/Encouragement";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Great from "./pages/Great";
import Crisis from "./pages/Crisis";
import EPResult from "./pages/EPResult";
import EncResult from "./pages/EncResult";
import ExDispose from "./pages/ExDispose";

class App extends Component {

  render() {
    return (
      <div className="App">

          <CSSTransition
            timeout={{ enter: 300, exit: 300 }}
            classNames={"fade"}
            key={window.location.key}
          >

          

            <Router>
              <div id="nav-links">
                <Link to="/">Home</Link> | <Link to="/excercise">Express</Link> | <a href="https://chiuy5.github.io/drifting/ocean/">Explore</a>
              </div>
              {console.log(window.location)}
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/processing" component={ForumSubmission} />
                <Route path="/encourage" component={Encouragement} />
                <Route path="/great" component={Great} />
                <Route path="/crisis" component={Crisis} />
                <Route path="/ep_result" component={EPResult} />
                <Route path="/en_result" component={EncResult} />
                <Route path="/excercise" component={Exercise} />
                <Route path="/ex_dispose" component={ExDispose} />
              </Switch>
            </Router>
          </CSSTransition>
      </div >
    );
  }
}


export default App;

