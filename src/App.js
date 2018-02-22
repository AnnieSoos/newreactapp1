import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import Player from './components/Player'
import Board from './containers/Board'


const players = [
  { id: 1, name: 'Arno', score: 4 },
  { id: 2, name: 'Mat', score: 6 },
  { id: 3, name: 'Mike', score: 3 },
  { id: 4, name: 'Wouter', score: 4 },
  { id: 5, name: 'Bram', score: 5 },
  { id: 6, name: 'Mimi', score: 3 }
]
players.score.sort();

class App extends Component {
  render() {
    return (
      <div classname="App">
         <Board players={players} />
          {players.map((player, index) => <Player key={index} { ...player } />)}
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
