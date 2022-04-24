import React, { Component } from 'react'
import InputRef from './InputRef'

export default class ParentRef extends Component {

  constructor(props) {
    super(props)
    
    this.buttonRef = React.createRef()
  }

  clickHandler = () => {
    this.buttonRef.current.focusInput()
  }

  render() {
    return (
      <div>
        <InputRef ref={this.buttonRef} />
        <button onClick={this.clickHandler}> Focus input </button>
      </div>
    )
  }
}
