import React from 'react';
import logo from '../../SeanMooneyLogoWhiteOutlined.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faCoffee, faFile, faPhone, faBlog } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

export default class Header extends React.Component {
    render() {
        return (
            <header className="page-header">
              <div className="header-logo">
                <img className="header-logo-img" alt="Sean Mooney" src={logo}></img>
              </div>
              <div className="push-right header-nav">
                <div className="header-nav-item">
                  <FontAwesomeIcon className="header-nav-icon" icon={faUserAlt} />
                  <div className="header-nav-label">About</div>
                </div>
                <div className="header-nav-item">
                  <FontAwesomeIcon className="header-nav-icon" icon={faCoffee} />
                  <div className="header-nav-label">Experience</div>
                </div>
                <div className="header-nav-item">
                  <FontAwesomeIcon className="header-nav-icon" icon={faFile} />
                  <div className="header-nav-label">Resume</div>
                </div>
                <div className="header-nav-item">
                  <FontAwesomeIcon className="header-nav-icon" icon={faPhone} />
                  <div className="header-nav-label">Contact</div>
                </div>
                <div className="header-nav-item">
                  <FontAwesomeIcon className="header-nav-icon" icon={faBlog} />
                  <div className="header-nav-label">Blog</div>
                </div>
                <div className="header-nav-item">
                  <FontAwesomeIcon className="header-nav-icon" icon={faCoffee} />
                  <div className="header-nav-label">GitHub</div>
                </div>
              </div>
            </header>
        );
    }
}
