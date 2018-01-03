import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import './RandomizeButton.css'

export default class RandomizeButton extends PureComponent {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    players: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired
    })).isRequired
  }

  state = { started: false }

  toggle = () => {
    if (this.state.started) { return this.stop() }
    this.randomize()
  }

  randomize = () => {
    const { onChange, players } = this.props

    this.setState({ started: true })

    this.timeout = setTimeout(() => {
      onChange(players[Math.floor(Math.random() * players.length)].id)
      this.randomize()
    }, 500);
  }

  stop() {
    this.timeout && clearTimeout(this.timeout)
    this.setState({ started: false })
  }

  render() {
    return (
      <div style={{ display: 'flex', width: 500, margin: '12px auto', alignItems: 'flex-end', flexDirection: 'column' }}>
        <button className="Randomize" onClick={this.toggle}>
          <FontAwesome className={this.state.started ? 'started' : 'stopped' } name="gears" />
        </button>
      </div>
    )
  }

  componentWillUnmount() {
    this.stop()
  }
}