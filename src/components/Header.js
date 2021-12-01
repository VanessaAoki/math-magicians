import React from 'react';
import {
  Link, NavLink,
} from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <h1><Link to="/home">Math Magicians</Link></h1>
    <nav>
      <ul id="navbar">
        <li><NavLink activeClassName="highlight" to="/home">Home</NavLink></li>
        <li><NavLink activeClassName="highlight" to="/calculator">Calculator</NavLink></li>
        <li><NavLink activeClassName="highlight" to="/quote">Quote</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
