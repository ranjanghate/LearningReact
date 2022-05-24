import React, { useState } from 'react'

function UseState() {
  const [count, setCount] = useState(0);
  console.log('UseState Render')
  return (
    <div>
      <button onClick={() => setCount(prevCount => prevCount + 1)}> Count: {count} </button>
      <button onClick={() => setCount(5)}> Set to 5 </button>
      <button onClick={() => setCount(0)}> Set to 0  </button>
    </div>
  )
}

export default UseState
