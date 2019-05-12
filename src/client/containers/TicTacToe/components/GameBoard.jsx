import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const GameBoard = ({ board, selectedCell }) => (
    <Fragment>
        <div className="game-board">
            {board.map((cell, index) => (
                <div key={index} 
                onClick={() => selectedCell(index)}
                className={cell !== '' ? `selected val-${cell}`:null}><span>{cell}</span></div> 
            ))}
        </div>
    </Fragment>
);

GameBoard.propTypes = {
    board: PropTypes.arrayOf(PropTypes.string)
};

export default GameBoard;