import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import PlusOneButton from './PlusOneButton'
import './Player.css'

export default class Player extends PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    score: PropTypes.number,
    increasePlayerScore: PropTypes.func.isRequired
  }

  state = { changed: false }

  componentWillReceiveProps(nextProps) {
    if (nextProps.score !== this.props.score) {
      this.setState({ changed: true })
    }
  }

  componentDidUpdate() {
    setTimeout(() => this.setState({ changed: false }), 500)
    
  }

  plusOne = () => {
    const { id, increasePlayerScore } = this.props
    increasePlayerScore(id)
  }

  render() {
    const { name, score } = this.props

    return (
      <li className="Player">
        <p className="name">{name}</p>
        <p className={this.state.changed ? 'score changed' : 'score' }>{score}</p>
        <PlusOneButton onClick={this.plusOne} />
      </li>
    )
  }
}