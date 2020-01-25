import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faCoffee, faFile, faPhone, faBlog, faBars } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

export default class Header extends React.Component {
  render() {
    return (
      <header className="page-header">

        <Link to="/" className="header-logo">
          <div className="header-text"><span className="header-logo-s">S</span>ean Mooney</div>
        </Link>
        <div className="header-burger" onClick={() => document.getElementById("header-nav").classList.toggle("show-nav")}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div id="header-nav" className="push-right header-nav">
          <Link to="/" className="header-nav-item" onClick={() => document.getElementById("header-nav").classList.toggle("show-nav")}>
            <div className="header-nav-icon">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <div className="header-nav-label">About</div>
          </Link>
          <Link to="/experience" className="header-nav-item" onClick={() => document.getElementById("header-nav").classList.toggle("show-nav")}>
            <div className="header-nav-icon">
              <FontAwesomeIcon icon={faCoffee} />
            </div>
            <div className="header-nav-label">Experience</div>
          </Link>
          <Link to="/resume" className="header-nav-item" onClick={() => document.getElementById("header-nav").classList.toggle("show-nav")}>
            <div className="header-nav-icon">
              <FontAwesomeIcon icon={faFile} />
            </div>
            <div className="header-nav-label">Resume</div>
          </Link>
          <Link to="/contact" className="header-nav-item" onClick={() => document.getElementById("header-nav").classList.toggle("show-nav")}>
            <div className="header-nav-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="header-nav-label">Contact</div>
          </Link>
          <Link to="/blog" className="header-nav-item" onClick={() => document.getElementById("header-nav").classList.toggle("show-nav")}>
            <div className="header-nav-icon">
              <FontAwesomeIcon icon={faBlog} />
            </div>
            <div className="header-nav-label">Blog</div>
          </Link>
          <a href="https://github.com/sean-mooney" rel="noopener noreferrer" target="_blank" className="header-nav-item" onClick={() => document.getElementById("header-nav").classList.toggle("show-nav")}>
            <div className="header-nav-icon">
              <FontAwesomeIcon icon={faCoffee} />
            </div>
            <div className="header-nav-label">GitHub</div>
          </a>
        </div>
      </header>
    );
  }
}
