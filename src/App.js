import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './pages/about/about';

import Header from './components/header/header';
import Intro from './components/intro/intro';

function App() {
  var disableIntro = false;
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/about">
            <About />
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

export default App;
