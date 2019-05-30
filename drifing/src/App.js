import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import './App.css';
/* import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button, Form, FormControl, Container, Image } from 'react-bootstrap'; */
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";



import ForumSubmission from "./pages/ForumSubmission";
import Encouragement from "./pages/Encouragement";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Great from "./pages/Great";
import Crisis from "./pages/Crisis";
import EPResult from "./pages/EPResult";
import EncResult from "./pages/EncResult";
import ExDispose from "./pages/ExDispose";
import Forum from "./pages/Forum";


class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div id="nav-links">
            <Link to="/">Home</Link> | <Link to="/excercise">Express</Link> | <a href="https://chiuy5.github.io/drifting/ocean/">Explore</a>
          </div>
          

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
            <Route path="/forum" component={Forum} />
          </Switch>
        </Router>

      </div >
    );
  }
}


export default App;

