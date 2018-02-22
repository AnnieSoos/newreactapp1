import React, { PureComponent } from 'react'
import Title from '../components/Title'
import Player from '../components/Player'
import './Board.css'

export default class Board extends PureComponent {
  renderPlayers() {
    const { players } = this.props

    return players
    .sort((p1,p2) => (p2.score - p1.score))
    .map((player, index) => (
  )=> ( <Player key={index} { ...player } />
    ))}

    static propTypes = {
  content: PropTypes.string.isRequired
}
//so players.sort... (<Player .index.sort(function(a,b){return a-b;})
return
  <div>
    <Title content="Scoreboard" />
    <ul className="Board">
      {players.map((player, index) => (
        <Player key={index} { ...player } />
      ))}
}
}
/*
  return players
    .concat ()
    .sort((p1, p2) => (p2.score - p1.score))
    .map((player, index) => (
      <Player key={index} {...player} />
  ))
*/

// players.sort(do something here).map(do some stuffe) {print the stuf}
// not inside another
// output from player.sort(thins) will return a new, not manipulated array and this output you want to map over
//          {players.map((player, index) => (<Player key={index} { ...player } />
          // ))}
//[...m].map(e =>{ return e[1];}).slice().sort(function(a, b) {
// numbers.sort(function(a, b) {
//   return a - b;
// });
