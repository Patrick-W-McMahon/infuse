import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
// import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from './components/Header';
import Navigation from './components/Navigation';

//Pages
import Home from './Home';
import TicTacToe from './examples/tic-tac-toe/TicTacToe';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <Route exact path="/tic-tac-toe" component={TicTacToe} />
          </div>
          <ToastContainer autoClose={2000} />
        </div>
      </Router>
    );
  }
}

/*

<Container>
        <Row>
          <Col>left nav</Col>
          <Col xs={9}>content</Col>
        </Row>
      </Container>

*/