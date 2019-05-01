import React, { Component } from "react";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch("/api/getUsername").then(res => res.json()).then(user => this.setState({ username: user.username }));
  }

  notify(message) {
    toast(message, { 
      position: toast.POSITION.TOP_LEFT
    });
  }

  handleSelectionClick(choice) {
    this.setState({
      player: choice,
      computer: null,
      result: false,
      face: null
    });
    PostMove(choice).then(data => {
      if(data.message !== undefined){
        this.setState({ player: null, computer: null, result: false, face: null, hasErr: true });
        this.notify("something went wrong try again");
      } else {
        const { computerChoice: computer, result, face } = data;
        this.setState({computer, result, face });
        this.notify(`You ${result}`);
      }
    });
  }

  handleResetGame() {
    this.setState({ player: null, computer: null, result: false, face: null, hasErr: false });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.username ? <h1>Hello {this.state.username}</h1> : <h1>Loading.. please wait!</h1>}
        <p>welcome to Infuse a flexable React Starter Kit</p>
      </React.Fragment>
    );
  }
}