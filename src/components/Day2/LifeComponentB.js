import React, { Component } from 'react'

export default class LifeComponentB extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message: 'Hello'
    }
    console.log('LifeCycleB constructor')
  }

  static getDerivedStateFromProps(props, state) {
    console.log('LifecycleB getDerivedStateFromPop')
    return null
  }

  componentDidMount() {
    console.log('LifecycleB componentDidMount')
  }

  shouldComponentUpdate() {
    console.log('LifecycleB shouldComponentUpdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps, prevStates) {
    console.log('LifecycleB getSnapshotBeforeUpdate')
    return null
  }

  componentDidUpdate() {
    console.log('LifecycleB componentDidUpdate')
  }

  render() {
    console.log('LifecycleB render')
    return (
      <div>LifeComponentB</div>
    )
  }
}
