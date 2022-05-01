import axios from 'axios'
import React, { useState, useEffect } from 'react'

function PostFetch() {

  const [post, setPost] = useState({})
  const [id, setId] = useState(1)
  const [fetchId, setFetchId] = useState(1)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${fetchId}`)
          .then((response) => {
            console.log(response.data)
            setPost(response.data)
          }).catch((err) => {
            console.warn('Data not Found')
          })
  }, [fetchId])

  function changePostId(e) {
    setId(e.target.value)
  }

  function fetchData(e) {
    setFetchId(id)
  }

  return (
    <div>
      <input type='number' value={id} onChange={changePostId} />
      <button onClick={fetchData}> Fetch Post </button>
      <h1> POST </h1>
      {post.title}
    </div>
  )
}

export default PostFetch