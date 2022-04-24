import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       posts: []
    }
  }

  // It runs only during a component lifecycle when the component is mount
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          console.log(response.data)
          this.setState({
            posts: response.data
          })
        })
        .catch((error) => {
          console.log(error)
        })
  }

  render() {
    const { posts } = this.state
    return (
      <div>
        List of posts
        {
          posts.length ?
          posts.map(post => <div key={post.id}> {post.title} </div>) :
          null
        }
      </div>
    )
  }
}

export default PostList
