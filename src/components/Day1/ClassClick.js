import React, { Component } from 'react'

export class ClassClick extends Component {

  clickButton() {
    console.log('Button Clicked Class');
  }

  render() {
    return (
      <div><button onClick={this.clickButton}> ClassClick</button></div>
    )
  }
}

export default ClassClick