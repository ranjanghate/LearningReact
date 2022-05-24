import React, { useState } from 'react'

export const ParentOne = ({ children, value }) => {
  const [count, setCount] = useState(0)

  console.log('Parent renders')
  return (
    <div>
      <div>
        Grand Value {value}
      </div>
      <button onClick={() =>  setCount(prevCount => prevCount + 1)}> Count -- {count}</button>
      { children }
    </div>
  )
}
