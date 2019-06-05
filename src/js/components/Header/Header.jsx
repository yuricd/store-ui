import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';

import './Header.scss';

export default class Header extends Component {
  render() {
    return (
        <div className="wrapper">
          <header>
            
            <div className="logo" alt="Allien Crew">
              <NavLink to="/">
                <img src={logo} alt="Allien Crew" />
              </NavLink>
            </div>
            
            <nav className="main-menu">
              <ul>
                <li>
                  <NavLink to="/">Highlights</NavLink>
                </li>
                <li>
                  <NavLink to="/catalog">Catalog</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>

              <ul className="main-menu___right">
                <li>
                  <NavLink to="/measures">
                    Measures
                  </NavLink>
                  
                </li>
                <li className="main-menu__sign-in">
                  <NavLink to="/login">
                    Sign in/Sign up
                  </NavLink>
                </li>
              </ul>
            </nav>
        </header>
      </div>
    );
  }
}

