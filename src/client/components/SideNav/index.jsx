import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
    <div className="sidebar-header">
        <h3><Link to={`/`} className="navbar-brand">Infuse Starter Kit</Link></h3>
    </div>
);

const Navigation = () => (
    <ul className="list-unstyled components">
        <h2>Examples</h2>
        <li><Link to={`/contacts`}>Contacts</Link></li>
        <li><Link to={`/rock-paper-scissors`}>Rock Paper Scissors</Link></li>
        <li><Link to={'/tic-tac-toe'}>Tic Tac Toe</Link></li>
    </ul>
);

const SideNav = () => (
    <div className="sidebar">
        <Header />
        <Navigation />
    </div>
);

export default SideNav;