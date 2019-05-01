import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button, Form, FormControl, Container, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import ForumSubmission from "./ForumSubmission";
import Encouragement from "./Encouragement";
import Home from "./Home";
import Exercise from "./Exercise"

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/processing" component={ForumSubmission} />
            <Route path="/encourage" component={Encouragement} />
            <Route path="/exercise" component={Exercise} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

/*
          <Route exact path="/" render={() => <Home />} />
          <Route path="/processing/" render={() => <ForumSubmission />} />
          <Route path="/encourage/" render={() => <Encouragement />} />
          
          <Route exact path="/" component={Home} />
          <Route path="/processing" component={ForumSubmission} />
          <Route path="/encourage" component={Encouragement} />

*/