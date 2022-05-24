import React, { useState } from 'react'
import { ChildOne } from './ChildOne'
import { ParentOne } from './ParentOne'

export const GrandParent = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() =>  setCount(prevCount => prevCount + 1)}> Grand Count -- {count}</button>
      <ParentOne value={count} >
        <ChildOne />
      </ParentOne>
    </div>
  )
}
