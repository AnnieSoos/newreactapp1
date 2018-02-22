import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'

class App extends Component {
  render() {
    return (
      <div>
        <Title content = "Hello world"/>
        <Title content="Scoreboard" />
      
        </div>
    );
  }
}

export default App;



//<div className="App">
//  <header className="App-header">
//    <img src={logo} className="App-logo" alt="logo" />
//    <h1 className="App-title">Welcome to React</h1>
//  </header>
//  <p className="App-intro">
//    To get started, edit <code>src/App.js</code> and save to reload.
//  </p>
