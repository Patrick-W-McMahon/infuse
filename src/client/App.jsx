import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Header from './components/Header';
import Navigation from './components/Navigation';
import './style.css';

//Pages
import Home from './containers/Home';
import ContactsExample from './containers/Contacts';
import RockPaperScissors from './containers/RockPaperScissors';
import TicTacToe from './containers/TicTacToe';

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
            <Route exact path="/contacts" component={ContactsExample} />
            <Route exact path="/rock-paper-scissors" component={RockPaperScissors} />
            <Route exact path="/tic-tac-toe" component={TicTacToe} />
          </div>
          <ToastContainer autoClose={2000} />
        </div>
      </Router>
    );
  }
}