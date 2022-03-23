import React, { Component } from 'react'
import LifeComponentB from './LifeComponentB'

export default class LifeComponentA extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
    console.log('LifeCycleA constructor')
  }

  updateState = () => {
    this.setState({
      message: 'Hi'
    })
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleA getDerivedStateFromPops')
    return null
  }

  componentDidMount() {
    console.log('LifecycleA componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifecycleA shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevStates) {
    console.log('LifecycleA getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('LifecycleA componentDidUpdate')
  }

  render() {
    console.log('LifecycleA render')
    return (
      <div>
        <LifeComponentB />
        <div>LifeComponentA {this.state.message} </div>
        <button onClick={this.updateState}> Click </button>
      </div>
    )
  }
}

// Order of lifecycle component during update with a child component
// LifecycleA getDerivedStateFromPops
// LifecycleA shouldComponentUpdate
// LifecycleA render
// LifecycleB getDerivedStateFromPop
// LifecycleB shouldComponentUpdate
// LifecycleB render
// LifecycleB getSnapshotBeforeUpdate
// LifecycleA getSnapshotBeforeUpdate
// LifecycleB componentDidUpdate
// LifecycleA componentDidUpdate
