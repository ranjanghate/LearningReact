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

function MultipleUseReducer() {

  const [count, dispatch] = useReducer(reducer, initalValue)
  const [countTwo, dispatchTwo] = useReducer(reducer, initalValue)

  return (
    <div>
      <h1> Count 1</h1>
      Count - {count}
      <button onClick={ () => dispatch('increment')}> Increment </button>
      <button onClick={ () => dispatch('decrement')}> Decrement </button>
      <button onClick={ () => dispatch('reset')}> Reset </button>
      <h1> Count 2</h1>
      Count - {countTwo}
      <button onClick={ () => dispatchTwo('increment')}> Increment </button>
      <button onClick={ () => dispatchTwo('decrement')}> Decrement </button>
      <button onClick={ () => dispatchTwo('reset')}> Reset </button>
    </div>
    
  )
}

export default MultipleUseReducer
