import React from 'react';

const Model = ({ title, show, onClose, children }) => (
    <div className={`modal ${show ? 'open' : 'close'}`}>
        <header>
            <span>{title}</span>
            <button onClick={() => onClose()} className="closeBtn">X</button>
        </header>
        <div className="model-content">{children}</div>
    </div>
);
export default Model;