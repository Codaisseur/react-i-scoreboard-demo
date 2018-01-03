import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Trophy from '../components/Trophy'
import './PrizeCabinet.css'

export default class PrizeCabinet extends PureComponent {
  static propTypes = {
    players: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired
    })).isRequired
  }

  trophies() {
    let selected = []
    let tropies = ['gold', 'silver', 'bronze']
    let nextTrophy = tropies.shift()

    return this.props.players
      .sort((p1, p2) => (p2.score - p1.score))
      .filter((player) => {
        const { score } = player

        if (selected.length < 3 || selected[selected.length - 1] === score) {
          selected.push(score)
          return true
        }

        return false
      })
      .map((player, index, players) => {
        const playerTrophy = { ...player, trophy: nextTrophy }

        if (players[index+1] && players[index+1].score < player.score) {
          nextTrophy = tropies.shift()
        }

        return playerTrophy
      })
  }

  renderTropies = () => {
    return this.trophies().map((trophy, index) => <Trophy key={index} { ...trophy } />)
  }

  render() {
    return (
      <div className="PrizeCabinet">
        <ul>
          {this.renderTropies()}
        </ul>
      </div>
    )
  }
}