import axios from 'axios'
import React, { useState, useEffect } from 'react'

function DataFetching() {

  const [posts, setPosts] = useState([])
  const [id, setId] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
          .then((response) => {
            console.log('Data fetched')
            setPosts(response.data)
          }).catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h1> Posts </h1>
      <ul>
        {
          posts.map(post => (
            <li key={post.id}> {post.title} </li>
            ))
        }
      </ul>
    </div>
  )
}

export default DataFetching
