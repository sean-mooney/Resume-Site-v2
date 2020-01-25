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
                  <div className="header-nav-icon">
                    <FontAwesomeIcon icon={faUserAlt} />
                  </div>
                  <div className="header-nav-label">About</div>
                </div>
                <div className="header-nav-item">
                  <div className="header-nav-icon">
                    <FontAwesomeIcon icon={faCoffee} />
                  </div>
                  <div className="header-nav-label">Experience</div>
                </div>
                <div className="header-nav-item">
                  <div className="header-nav-icon">
                    <FontAwesomeIcon icon={faFile} />
                  </div>
                  <div className="header-nav-label">Resume</div>
                </div>
                <div className="header-nav-item">
                  <div className="header-nav-icon">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>
                  <div className="header-nav-label">Contact</div>
                </div>
                <div className="header-nav-item">
                  <div className="header-nav-icon">
                    <FontAwesomeIcon icon={faBlog} />
                  </div>
                  <div className="header-nav-label">Blog</div>
                </div>
                <div className="header-nav-item">
                  <div className="header-nav-icon">
                    <FontAwesomeIcon icon={faCoffee} />
                  </div>
                  <div className="header-nav-label">GitHub</div>
                </div>
              </div>
            </header>
        );
    }
}
