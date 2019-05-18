import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const selections = ['rock','paper','scissors'];

const SelectPanel = ({onSelection}) => (
    <div className="btn-group btn-group-lg bg-white rounded select-panel" role="group" aria-label="Basic example">
        {selections.map((option,key) => <button key={key} onClick={() => onSelection(`${option}`)} type="button" className="btn btn-secondary"><i className={`fas fa-2x fa-hand-${option}`}></i></button>)}
    </div>
);

SelectPanel.propTypes = {
    onSelection: PropTypes.func.isRequired
};

export default SelectPanel;