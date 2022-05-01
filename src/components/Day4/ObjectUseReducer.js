import React, { useReducer } from 'react'

const initalState = {
  firstCounter: 0,
  secondCounter: 10
}

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return { ...state, firstCounter: state.firstCounter + action.value }
    case 'decrement':
      return { ...state, firstCounter: state.firstCounter - action.value }
    case 'increment2':
      return { ...state, secondCounter: state.secondCounter + action.value }
    case 'decrement2':
      return { ...state, secondCounter: state.secondCounter - action.value }
    case 'reset':
      return initalState
    default:
      return { firstCounter: state.firstCounter }
   }
}

function ObjectUseReducer() {

  const [count, dispatch] = useReducer(reducer, initalState)

  return (
    <div>
      <h1> First Counter</h1>
      Count =: {count.firstCounter}
      <button onClick={ () => dispatch({ type: 'increment', value: 1 })}> Increment </button>
      <button onClick={ () => dispatch({ type: 'decrement', value: 1 })}> Decrement </button>
      <button onClick={ () => dispatch({ type: 'increment', value: 5 })}> Increment by 5 </button>
      <button onClick={ () => dispatch({ type: 'decrement', value: 5 })}> Decrement by 5 </button>
      <button onClick={ () => dispatch({ type: 'reset' })}> Reset </button>

      <h1> Second Counter </h1>
      Count =: {count.secondCounter}
      <button onClick={ () => dispatch({ type: 'increment2', value: 1 })}> Increment </button>
      <button onClick={ () => dispatch({ type: 'decrement2', value: 1 })}> Decrement </button>
      <button onClick={ () => dispatch({ type: 'increment2', value: 5 })}> Increment by 5 </button>
      <button onClick={ () => dispatch({ type: 'decrement2', value: 5 })}> Decrement by 5 </button>
      <button onClick={ () => dispatch({ type: 'reset' })}> Reset </button>

    </div>
  )
}

export default ObjectUseReducer
