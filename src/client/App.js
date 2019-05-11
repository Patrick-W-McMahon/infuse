import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
// import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from './components/Header';
import Navigation from './components/Navigation';

//Pages
import Home from './containers/Home';
import RockPaperScissors from './containers/RockPaperScissors';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="sidebar">
            <Header />
            <Navigation />
          </div>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route exact path="/rock-paper-scissors" component={RockPaperScissors} />
          </div>
          <ToastContainer autoClose={2000} />
        </div>
      </Router>
    );
  }
}