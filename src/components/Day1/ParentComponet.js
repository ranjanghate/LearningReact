import React, { Component } from 'react'

class ParentComponet extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName: 'Parent'
    }

    this.greetParent = this.greetParent.bind(this)
  }

  greetParent() {
    alert(`Hello + ${this.state.parentName}`)
  }

  render() {
    return (
      <div>ParentComponet</div>
    )
  }
}

export default ParentComponet