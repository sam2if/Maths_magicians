/*eslint-disable*/
import React from 'react';
import { Link } from 'react-router-dom';
import './navigationbar.scss';

function NavigationBar() {
  return (
    <header>
      <nav className="navBar">
        <ul className="menu">
          <li>
            <Link to="/" className="navItem">Home</Link>
          </li>
          <li>
            <Link to="/calculator" className="navItem">Calculator</Link>
          </li>
          <li>
            <Link to="/FetchQuotes" className="navItem">Quote</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
