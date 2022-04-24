import React, { Component } from 'react'

export default class RefComponent extends Component {

  constructor(props) {
    super(props)
    this.inputRef = React.createRef() // Refs provide a way to access DOM nodes or React elements created in the render method.
    this.cbRef = null
    this.setCbRef = (element) => {
      this.cbRef = element
    }
  }

  componentDidMount() {
    if(this.cbRef) {
      this.cbRef.focus()
    }
    // this.inputRef.current.focus() // focused the ref
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/> {/* Assigned a Ref to dom */}
        <input type="text" ref={this.setCbRef}/> {/* Assigned a Callback Ref to dom  input element is passed implicitly as parameter to setRef */}
      </div>
    )
  }
}
