import React, { Component, Fragment } from "react";
import { connect } from 'react-redux';
import { fetchGameMove, resetGame } from './action';
import "./style.css";
import SelectPanel from '../../components/RockPaperScissors/SelectPanel';
import ResultsPanel from '../../components/RockPaperScissors/ResultsPanel';
import Icon from '../../components/Icon';
import ComputerFace from '../../components/ComputerFace';
import ReadMe from '../../components/ReadMe';

class RockPaperScissors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      readMeOpen: false
    };
  }

  handleReadMe(v) {
    this.setState({ readMeOpen: v });
  }

  render() {
    const { readMeOpen } = this.state;
    const { loading, error, result, face, fetchGameMove, resetGame } = this.props;
    return (
      <Fragment>
        <button className="rm-btn" onClick={() => this.handleReadMe(true)}>Read Me Docs</button>
        <div className="card shadow p-3 mb-5">
          <div className="card-img-top">
            <ComputerFace face={face} size={8} />
          </div>
          <div className="card-body">
            <SelectPanel onSelection={e => fetchGameMove(e)}/>
            <div className="card card-body bg-light results-panel">
              {error ? <Icon icon='exclamation-triangle' /> : null}
              {result ? <ResultsPanel {...this.props} /> : loading ? <Icon icon='cog' spin /> : null}
            </div>
            {result || error ? <button className="btn btn-secondary btn-reset" onClick={() => resetGame()}>Clear Results</button> : null}
          </div>
        </div>
        {readMeOpen ? <ReadMe src="README.md" onClose={() => this.handleReadMe(false)} /> : null}
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  const { loading, playerChoice, computerChoice, face, result, error } = state.RockPaperScissors;
  return { loading, playerChoice, computerChoice, face, result, error };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchGameMove: choice => dispatch(fetchGameMove(choice)),
    resetGame: () => dispatch(resetGame())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RockPaperScissors);