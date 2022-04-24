import React, { Component } from 'react'
import MemoComponent from './MemoComponent'

export default class ParentComponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'name'
    }
  }

  // this will set a setInterval for 2sec after every component re-rendering
  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'name'
      })
    }, 2000)
  }

  
  render() {
    console.log('Render Parent Component')
    return (
      <MemoComponent name={this.state.name}> </MemoComponent>
    )
  }
}
