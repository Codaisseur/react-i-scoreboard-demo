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
    const tropies = ['gold', 'silver', 'bronze']

    return this.props.players
      .sort((p1, p2) => (p2.score - p1.score))
      .reduce((grouped, player) => {
        const el = grouped.find(vals => vals[0].score === player.score)
        if (el) el.push(player) 
        else grouped.push([player])
        return grouped        
      }, [])
      .slice(0, 3)
      .map((set, index) => set.map(player => ({
        ...player,
        trophy: tropies[index]
      })))
      .reduce((a, b) => a.concat(b))
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