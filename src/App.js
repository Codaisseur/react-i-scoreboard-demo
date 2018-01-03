import React, { Component } from 'react'
import Title from './components/Title'
import PrizeCabinet from './containers/PrizeCabinet'
import Board from './containers/Board'
import RandomizeButton from './components/RandomizeButton'
import './App.css'

class App extends Component {
  state = {
    players: [
      { id: 1, name: 'Arno', score: 4 },
      { id: 2, name: 'Mat', score: 6 },
      { id: 3, name: 'Mike', score: 3 },
      { id: 4, name: 'Wouter', score: 4 },
      { id: 5, name: 'Bram', score: 5 },
    ]
  }

  increasePlayerScore = (playerId) => {
    this.setState({
      players: this.state.players
        .map((player) => {
          if (player.id !== playerId) { return player }
          return { ...player, score: player.score + 1 }
        })
    })
  }

  sortedPlayers() {
    return this.state.players
      .sort((p1, p2) => (p2.score - p1.score))
  }

  render() {
    return (
      <div className="App">
        <RandomizeButton
          onChange={this.increasePlayerScore}
          players={this.state.players}
        />

        <Title content="Scoreboard" />

        <PrizeCabinet players={this.state.players} />

        <Board
          players={this.sortedPlayers()}
          increasePlayerScore={this.increasePlayerScore}
        />
      </div>
    )
  }
}

export default App
