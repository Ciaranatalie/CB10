import React from 'react';
import './Header.css';

const Header = () => (
    <header className="header">
        <h1>Mortgage Calculator</h1>
        <button className="clear-button" onClick={() => window.location.reload()}>Clear All</button>
    </header>
);

export default Header;
