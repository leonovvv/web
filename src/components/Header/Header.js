import React, { Component } from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
class Header extends Component {
  render() {
    return (
      <header id="header" class="container">
        <nav id="nav-wrap" class="twelve columns">
          <div>
            <a href="index.html">
              <img src="../img/logo.png" />
            </a>
          </div>
          <Link to={`/`} className="header-item">
            <a href="index.html">home</a>
          </Link>
          <div class="header-item">
            <a href="">Program</a>
          </div>
          <Link to={`/contact-us`} className="header-item">
            <a href="">Contact Us</a>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
