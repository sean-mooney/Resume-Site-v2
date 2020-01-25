import React from 'react';
import './App.scss';
import Header from './components/header/header';
import Intro from './components/intro/intro';

function App() {
  var disableIntro = Math.random() > 0.1;
  return (
    <div className="app">
      <Header></Header>
      {disableIntro || <Intro></Intro>}
    </div>
  );
}

export default App;
