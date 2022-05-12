import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

const intialState = {
  loading: true,
  error: '',
  data: {}
}

function reducer(state, action) {
  switch(action.type) {
    case 'FETCHING_ERROR':
      return {
        loading: false,
        error: 'Something Went Wrong',
        data: {}
      }
    case 'FETCHING_SUCCESSFULL':
      return {
        loading: false,
        error: '',
        data: action.payload
      }
    default:
      return intialState
  }
}

function DataFetchingReducer() {
  const [state, dispatch] = useReducer(reducer, intialState)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
          .then((response) => {
            dispatch({type: 'FETCHING_SUCCESSFULL', payload: response.data})
          }).catch((error) => {
            dispatch({type: 'FETCHING_ERROR'})
          })
  }, [])

  return (
    <div>
        { state.loading ? 'Loading' : state.data.title }
        { state.error ? state.error : null }
    </div>
  )
}

export default DataFetchingReducer