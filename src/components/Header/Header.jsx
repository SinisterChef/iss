import React from 'react';
import './Header.css';
import logo from './k_bw_logo.png';

const Header = () => {
    return (
    <header className="mosaic">
    <nav className="navbar px-5">
        <a className="navbar-brand" href="/" title="Home">
        <img className="brand-icon" alt="Kyle O'Brien logo" src={logo} height="30px" width="30px"></img>
        </a>
        <ul className="navbar-nav main-navigation-list">
        <li className="nav-item">
            <a className="nav-link" href="/#work" title="Work">Work</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/vitae.html" title="Work">Vitae</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#contact" title="Contact">Contact</a>
        </li>
        </ul>
    </nav>
    </header>
    )
}
 export default Header;