import React, { useState } from 'react'
import { MemoizedChildTwo } from './ChildTwo'

export const ParentTwo = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('user')

  console.log('Parent Two renders')
  return (
    <div>
      <button onClick={() =>  setCount(prevCount => prevCount + 1)}> Count -- {count}</button>
      <button onClick={() => setName('newUser')}> Change Name {name} </button>
      <MemoizedChildTwo name={name} />
    </div>
  )
}
