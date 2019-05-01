import React from 'react';
import PropTypes from 'prop-types';

const ResultsPanel = ({player,computer,result}) => (
    <React.Fragment>
        <h3>Game Results</h3>
        <ul>
            <li>{`You Picked: ${player}`}</li>
            <li>{`I picked: ${computer}`}</li> 
            <li>{`You ${result}`}</li> 
        </ul>
    </React.Fragment>
);

ResultsPanel.propTypes = {
    player: PropTypes.string,
    computer: PropTypes.string,
    result: PropTypes.string
};

export default ResultsPanel;