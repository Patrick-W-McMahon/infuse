import React, { Component } from "react";
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addWin, addLose, addTie } from '../../actions/ticTacToeAction';
import "./app.css";
import PostMove from './api/move.js';
import SelectPanel from './components/SelectPanel';
import ResultsPanel from './components/ResultsPanel';
import Icon from './components/Icon';
import ComputerFace from './components/ComputerFace';
import ReadMe from './components/ReadMe';

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: null,
      computer: null,
      result: false,
      face: null,
      hasErr: false,
      readMeOpen: false
    };
  }

  notify(message) {
    toast(message, { position: toast.POSITION.BOTTOM_RIGHT });
  }

  handleSelectionClick(choice) {
    const { addWin, addLose, addTie } = this.props;
    this.setState({
      player: choice,
      computer: null,
      result: false,
      face: null,
      hasErr: false
    });
    PostMove(choice).then(data => {
      if(data.message !== undefined){
        this.setState({ player: null, computer: null, result: false, face: null, hasErr: true });
        this.notify("something went wrong try again");
      } else {
        const { computerChoice: computer, result, face } = data;
        this.setState({computer, result, face });
        this.notify(`You ${result}`);
        switch(result) {
          case 'win':
            addWin();
            break;
          case 'lose':
            addLose();
            break;
          case 'tie':
            addTie();
            break;
        }
      }
    });
  }

  handleResetGame() {
    this.setState({ player: null, computer: null, result: false, face: null, hasErr: false });
  }

  handleReadMe(v) {
    this.setState({ readMeOpen: v });
  }

  render() {
    const { readMeOpen, hasErr, result, player, face } = this.state;
    return (
      <React.Fragment>
        <button className="rm-btn" onClick={() => this.handleReadMe(true)}>Read Me Docs</button>
        <div className="card shadow p-3 mb-5">
          <div className="card-img-top">
            <ComputerFace face={face} size={8} />
          </div>
          <div className="card-body">
            <SelectPanel onSelection={e => this.handleSelectionClick(e)}/>
            <div className="card card-body bg-light results-panel">
              {hasErr ? <Icon icon='exclamation-triangle' /> : null}
              {result ? <ResultsPanel {...this.state} /> : player ? <Icon icon='cog' spin /> : null}
            </div>
            {result || hasErr ? <button className="btn btn-secondary btn-reset" onClick={() => this.handleResetGame()}>Clear Results</button> : null}
          </div>
        </div>
        {readMeOpen ? <ReadMe src="README.md" onClose={() => this.handleReadMe(false)} /> : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({ ...state });
const mapDispatchToProps = dispatch => ({
  addWin: () => addWin(),
  addLose: () => addLose(),
  addTie: () => addTie()
});
export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);