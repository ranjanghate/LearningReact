import React, { useContext } from 'react'
import { CountContext } from '../../Day5'

function ComponentD() {
  const countContext = useContext(CountContext)
  return (
    <div>
      <h1> ComponentD </h1>
      Count - {countContext.countState}
      <button onClick={ () => countContext.countDispatch('increment')}> Increment </button>
      <button onClick={ () => countContext.countDispatch('decrement')}> Decrement </button>
      <button onClick={ () => countContext.countDispatch('reset')}> Reset </button>
    </div>
  )
}

export default ComponentD