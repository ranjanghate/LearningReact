import React, { Component } from 'react'

export class HoverCounter2 extends Component {
  render() {
    const { count, incrementCount } = this.props
    return (
      <div onMouseOver={incrementCount}>Second HoverCounter { count} </div>
    )
  }
}

export default HoverCounter2
