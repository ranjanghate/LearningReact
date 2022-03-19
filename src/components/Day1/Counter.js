import React, { Component } from 'react'

class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
       count: 0
    }
  }

  updateCount() {
    // this.setState({
    //   count: this.state.count + 1
    // }, () => { console.log(this.state.count)})
    // set State is Asynchronus function

    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  updateCountby5() {
    this.updateCount()
    this.updateCount()
    this.updateCount()
    this.updateCount()
    this.updateCount()
  }

  render() {
    return (
      <div> 
        <div> Counter - {this.state.count} </div>
        <button onClick={ () => this.updateCountby5()}> Update Count </button> 
      </div>
    )
  }
}

export default Counter