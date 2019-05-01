import React from 'react';
import { Link } from "react-router-dom";

const Header = () => (
    <div className="sidebar-header">
        <h3><Link to={`/`} className="navbar-brand">Infuse Starter Kit</Link></h3>
    </div>
);

export default Header;