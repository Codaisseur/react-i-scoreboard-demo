import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import FontAwesome from 'react-fontawesome'
import './Trophy.css'

export default class Player extends PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    trophy: PropTypes.string.isRequired
  }

  render() {
    const { name, trophy } = this.props

    return (
      <li className={`Trophy ${trophy}`}>
        <FontAwesome size="2x" className="icon" name="trophy" />
        <p className="name">{name}</p>
      </li>
    )
  }
}