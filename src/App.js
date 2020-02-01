import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import smoothscroll from 'smoothscroll-polyfill';

import About from './pages/about/about';
import Experience from './pages/experience/experience';
import Contact from './pages/contact/contact';
import Blog from './pages/blog/blog';
import Post from './pages/post/post';

import Header from './components/header/header';
import Intro from './components/intro/intro';

class App extends React.Component {
  render() {
    smoothscroll.polyfill();
    const { history } = this.props;
    var disableIntro = window.location.hostname.includes("localhost");
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
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/blog/post/:id">
              <Post />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/">
              <Experience />
            </Route>
          </Switch>
        </Router>
        {disableIntro || <Intro></Intro>}
      </div>
    );
  }
}

export default App;
