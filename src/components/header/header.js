import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt, faCoffee, faFile, faPhone, faBlog, faBars, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './header.scss';

import pdf from '../../documents/SeanMooneyResume.pdf';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {headerNavElement: null}
    this.routeClicked = this.routeClicked.bind(this);
  }

  componentDidMount() {
    this.setState({headerNavElement: document.getElementById("header-nav")});
  }

  routeClicked(wasBurger) {
    if (!this.state.headerNavElement) this.setState({headerNavElement: document.getElementById("header-nav")});
    if (window.screen.width <= 1028 ) document.body.style.overflowY === "hidden" ? document.body.style.overflowY = "auto" : document.body.style.overflowY = "hidden";
    if (wasBurger) this.state.headerNavElement.classList.toggle("show-nav");
    else {
      this.state.headerNavElement.classList.remove("show-nav");
      window.scrollTo(0,0);
    }
  }

  render() {
    return (
      <header className="page-header">

        <Link to="/" className="header-logo">
          <div className="header-text"><span className="header-logo-s">S</span>ean Mooney</div>
        </Link>
        <div className="header-burger" onClick={() => this.routeClicked(true)}>
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div id="header-nav" className="push-right header-nav">
          <Link to="/about" className={`header-nav-item ${this.props.location.pathname === "/about" ? "header-current-location" : ""}`} onClick={() => this.routeClicked()}>
            <div className="header-nav-icon">
              <FontAwesomeIcon icon={faUserAlt} />
            </div>
            <div className="header-nav-label">About</div>
            <FontAwesomeIcon className="push-right current-page-icon" icon={faArrowAltCircleLeft} />
          </Link>
          <Link to="/experience" className={`header-nav-item ${this.props.location.pathname === "/experience" || this.props.location.pathname === "/" ? "header-current-location" : ""}`} onClick={() => this.routeClicked()}>
            <div className="header-nav-icon">
              <FontAwesomeIcon icon={faCoffee} />
            </div>
            <div className="header-nav-label">Experience</div>
            <FontAwesomeIcon className="push-right current-page-icon" icon={faArrowAltCircleLeft} />
          </Link>
          <Link to="/blog" className={`header-nav-item ${this.props.location.pathname === "/blog" || this.props.location.pathname.includes("/blog/post/")  ? "header-current-location" : ""}`} onClick={() => this.routeClicked()}>
            <div className="header-nav-icon">
              <FontAwesomeIcon icon={faBlog} />
            </div>
            <div className="header-nav-label">Blog</div>
            <FontAwesomeIcon className="push-right current-page-icon" icon={faArrowAltCircleLeft} />
          </Link>
          <Link to="/contact" className={`header-nav-item ${this.props.location.pathname === "/contact" ? "header-current-location" : ""}`} onClick={() => this.routeClicked()}>
            <div className="header-nav-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="header-nav-label">Contact</div>
            <FontAwesomeIcon className="push-right current-page-icon" icon={faArrowAltCircleLeft} />
          </Link>
          <a href={pdf} target="_blank" rel="noopener noreferrer" className={`header-nav-item ${this.props.location.pathname === "/resume" ? "header-current-location" : ""}`} onClick={() => this.routeClicked()}>
            <div className="header-nav-icon">
              <FontAwesomeIcon icon={faFile} />
            </div>
            <div className="header-nav-label">Resume</div>
            <FontAwesomeIcon className="push-right current-page-icon" icon={faArrowAltCircleLeft} />
          </a>
          <a href="https://github.com/sean-mooney" rel="noopener noreferrer" target="_blank" className="header-nav-item" onClick={() => document.getElementById("header-nav").classList.remove("show-nav")}>
            <div className="header-nav-icon">
              <i className="devicon-github-plain"></i>
            </div>
            <div className="header-nav-label">GitHub</div>
          </a>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);