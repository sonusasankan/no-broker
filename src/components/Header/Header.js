import React, { Component } from 'react'

import './Header.css';
import logo from '../../assets/nb_logo.png';

 class Header extends Component {
  render() {
    return (
      <nav className="navbar">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo"/>
        </a>
      </nav>
    )
  }
}

export default Header;