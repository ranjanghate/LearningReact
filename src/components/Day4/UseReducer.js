import React, { useReducer } from 'react'

const initalValue = 0
function reducer(state, action) {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initalValue
    default:
      return state
  }
}

function UseReducer() {

  const [count, dispatch] = useReducer(reducer, initalValue)

  return (
    <div>
      Count - {count}
      <button onClick={ () => dispatch('increment')}> Increment </button>
      <button onClick={ () => dispatch('decrement')}> Decrement </button>
      <button onClick={ () => dispatch('reset')}> Reset </button>
    </div>
    
  )
}

export default UseReducer
