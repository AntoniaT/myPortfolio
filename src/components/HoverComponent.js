import React, { Component } from 'react'
import './component.css'

export default class HoverComponent extends Component {
  render () {
    return (
      <div className={'hover'}>
        <img className="bigImg" alt='big image' src='' />
        <p className="description">{name}</p>
      </div>
    )
  }
}