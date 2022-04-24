import axios from 'axios'
import React, { Component } from 'react'

export default class PostForm extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       userID: '',
       title: '',
       body: ''
    }
  }

  inputHandler = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
         .then(response => {
           console.log(response)
         })
         .catch( error => { console.error(error)
        })
  }

  render() {
    const { userID, title, body } = this.state

    return (
      <div>
        <form>
          <div>
            <input type="text" value={userID} onChange={this.inputHandler} name="userID"></input>
          </div>
          <div>
            <input type="text" value={title} onChange={this.inputHandler} name="title"></input>
          </div>
          <div>
            <input type="text" value={body} onChange={this.inputHandler} name="body"></input>
          </div>
          <button onClick={this.onSubmit}>Submit</button>          
        </form>
      </div>
    )
  }
}
