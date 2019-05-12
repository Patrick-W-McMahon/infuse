import React from 'react';
import PropTypes from 'prop-types';

const ResultsPanel = ({ playerChoice, computerChoice, result }) => (
    <React.Fragment>
        <h3>Game Results</h3>
        <ul>
            <li>{`You Picked: ${playerChoice}`}</li>
            <li>{`I picked: ${computerChoice}`}</li> 
            <li>{`You ${result}`}</li> 
        </ul>
    </React.Fragment>
);

ResultsPanel.propTypes = {
    playerChoice: PropTypes.string,
    computerChoice: PropTypes.string,
    result: PropTypes.string
};

export default ResultsPanel;