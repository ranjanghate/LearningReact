import React, { useState } from 'react'

function HookCounter2() {

  const initialCount = 0
  const [count, setCount] = useState(0)

  async function increaseBy5() {
    for(let i=0; i<5; i++) {
       setCount(prevCount => (prevCount + 1))
    }
  }

  return (
    <div>
      <div>Click {count}</div>
      <button onClick={ () => setCount(initialCount)}> Reset </button>
      <button onClick={ () => setCount(prevCount => (prevCount + 1)) }> Increament </button>
      <button onClick={ () => setCount(prevCount => (prevCount - 1)) }> Decrement </button>
      <button onClick={increaseBy5}> Increase by 5 </button>
    </div>
  )
}

export default HookCounter2
