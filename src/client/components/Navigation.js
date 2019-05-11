import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => (
    <ul className="list-unstyled components">
        <h2>Examples</h2>
        <li><Link to={`/rock-paper-scissors`} >Rock Paper Scissors</Link></li>
    </ul>
);
export default Navigation;