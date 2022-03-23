import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
  
  constructor(props) {
    super(props)
    
    this.state = {
      parentName: 'parent'
    }
    this.greetParent = this.greetParent.bind(this)
  }
  
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }
  
  render() {
    return (
      <ChildComponent greetParent={this.greetParent} />
    )
  }
}

export default ParentComponent
