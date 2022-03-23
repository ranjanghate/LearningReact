import React, { Component } from 'react'

export default class Form extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       text: '',
       value: ''
    }
  }

  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })  
  }

  handleTextChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSelectListChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmitButton = (event) => {
    event.preventDefault();
    const {username, text, value} = this.state
    alert(`${username} ${text} ${value}`)
  }

  render() {
    return (
      <div>
        <div> Form </div>
        <form onSubmit={this.handleSubmitButton}>
          <div>
            <label> Username </label>
            <input value={this.state.username} onChange={this.handleUsernameChange}></input>
          </div>
          <div>
            <label> Text </label>
            <textarea value={this.state.text} onChange={this.handleTextChange}></textarea>
          </div>
          <div>
            <label> Topic </label>
            <select value={this.state.value} onChange={this.handleSelectListChange}>
              <option value='a'> A </option>
              <option value='b'> B </option>
              <option value='c'> C </option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
