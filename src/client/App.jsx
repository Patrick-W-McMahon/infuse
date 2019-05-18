import React, { Component } from "react";
import { Switch, Route } from 'react-router';
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import SideNav from './components/SideNav';
import './style.css';

//Pages
import Home from './containers/Home';
import ContactsExample from './containers/Contacts';
import RockPaperScissors from './containers/RockPaperScissors';
import TicTacToe from './containers/TicTacToe';
import NoMatch from './containers/NoMatch';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="wrapper">
          <SideNav />
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/contacts" component={ContactsExample} />
              <Route exact path="/rock-paper-scissors" component={RockPaperScissors} />
              <Route exact path="/tic-tac-toe" component={TicTacToe} />
              <Route component={NoMatch} />
            </Switch>
          </div>
          <ToastContainer autoClose={2000} />
        </div>
      </Router>
    );
  }
}