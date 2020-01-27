import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { withRouter } from "react-router";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/about/about';
import Experience from './pages/experience/experience';
import Resume from './pages/resume/resume';
import Contact from './pages/contact/contact';
import Blog from './pages/blog/blog';

import Header from './components/header/header';
import Intro from './components/intro/intro';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { match, location, history } = this.props;
    var disableIntro = true;
    return (
      <div id="app" className="app">
        <Router history={history}>
          <Header></Header>
          <Switch>
            <Route path="/about">
              <About location={this.props}/>
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </Router>
        {disableIntro || <Intro></Intro>}
      </div>
    );
  }
}

export default App;
