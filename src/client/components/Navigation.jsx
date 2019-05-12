import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => (
    <ul className="list-unstyled components">
        <h2>Examples</h2>
        <li><Link to={`/contacts`}>Contacts</Link></li>
        <li><Link to={`/rock-paper-scissors`}>Rock Paper Scissors</Link></li>
        <li><Link to={'/tic-tac-toe'}>Tic Tac Toe</Link></li>
    </ul>
);
export default Navigation;