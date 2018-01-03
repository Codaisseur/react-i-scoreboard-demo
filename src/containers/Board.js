import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Player from '../components/Player'
import './Board.css'

export default class Board extends PureComponent {
  static propTypes = {
    players: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired
      })
    ).isRequired,
    increasePlayerScore: PropTypes.func.isRequired
  }

  render() {
    const { players, increasePlayerScore } = this.props

    return (
      <div>
        <ul className="Board">
          {players.map((player, index) => (
            <Player
              key={index}
              increasePlayerScore={increasePlayerScore}
              { ...player }
            />
          ))}
        </ul>
      </div>
    )
  }
}