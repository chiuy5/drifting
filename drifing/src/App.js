import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown, Button, Form, FormControl, Container, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import ForumSubmission from "./pages/ForumSubmission";
import Encouragement from "./pages/Encouragement";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Great from "./pages/Great";
import Crisis from "./pages/Crisis";
import EPResult from "./pages/EPResult";
import EncResult from "./pages/EncResult";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/processing" component={ForumSubmission} />
            <Route path="/encourage" component={Encouragement} />
            <Route path="/great" component={Great}/>
            <Route path="/crisis" component={Crisis}/>
            <Route path="/ep_result" component={EPResult} />
            <Route path="/en_result" component={EncResult} />
            <Route path="/excercise" component={Exercise} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;