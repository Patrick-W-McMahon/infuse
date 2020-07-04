import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
//cell !== '' ? `selected val-${cell} ${winningSet.includes(index) ? 'winning_move' : 'deactivated'}:null
const GameBoard = ({ board, selectedCell, winningSet }) => (
    <Fragment>
        {winningSet !== false ? ( // game over
            <div className="game-board game-over">
                {board.map((cell, index) => (
                    <div key={index} 
                    className={`cell-${index} ${cell !== '' ? `selected val-${cell}` : ''} disabled ${winningSet.includes(index) ? 'winning_move' : ''}`}><span>{cell}</span></div> 
                ))}
            </div>
        ) : (// game playing
            <div className="game-board">
                {board.map((cell, index) => (
                    <div key={index} 
                    onClick={() => selectedCell(index)}
                    className={cell !== '' ? `selected val-${cell}`:null}><span>{cell}</span></div> 
                ))}
            </div>
        )}
    </Fragment>
);

GameBoard.propTypes = {
    board: PropTypes.arrayOf(PropTypes.string),
    winningSet: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.bool,
        PropTypes.string
      ])
};

export default GameBoard;