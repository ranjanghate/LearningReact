import React, { Component } from 'react'
import PureComp from './PureComponent'
import RegComponent from './RegComponent'

class ParentComponent2 extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       msg: 'Hello'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        msg: 'Hello'
      })
    }, 2000)
  }

  render() {
    console.log('Parent Component Render')
    return (
      <div>
        ParentComponent2
        <RegComponent name={this.state.msg} />
        <PureComp name={this.state.msg} />
      </div>
    )
  }
}

export default ParentComponent2