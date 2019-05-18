import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { makeMove, resetGame } from './action';
import "./style.css";
import GameBoard from '../../components/TicTacToe/GameBoard';
import Icon from '../../components/Icon';
import ComputerFace from '../../components/ComputerFace';

class TicTacToe extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.move = this.move.bind(this);
  }

  move = index => {
    console.log('makeMove',index);
    this.props.makeMove(index);
  };

  render() {
    const { loading, error, face, fetchGameMove, board } = this.props;
    return (
      <Fragment>
        <div className="card shadow p-3 mb-5">
          <div className="card-img-top">
            <ComputerFace face={face} size={8} />
          </div>
          <div className="card-body">
            <div className="card card-body bg-light results-panel">
              {error ? <Icon icon='exclamation-triangle' /> : null}
              {loading ? <Icon icon='cog' spin /> : null}
              {!error && !loading ? <GameBoard board={board} selectedCell={this.move} /> : null}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { loading, board, face, error } = state.TicTacToe;
  return { loading, board, face, error };
};
const mapDispatchToProps = dispatch => {
  return {
    makeMove: choice => dispatch(makeMove(choice)),
    resetGame: () => dispatch(resetGame())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TicTacToe);