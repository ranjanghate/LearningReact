import React, { useState } from 'react'
import { MemoizedChildFour } from './ChildFour'
import { MemoizedChildThree } from './ChildThree'

export const ParentThree = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('user')

  console.log('Parent Three renders')
  return (
    <div>
      <button onClick={() =>  setCount(prevCount => prevCount + 1)}> Count -- {count}</button>
      <button onClick={() => setName('newUser')}> Change Name {name} </button>
      {/* <MemoizedChildThree name={name} >
        <strong> Hello </strong>
      </MemoizedChildThree> */}
      <MemoizedChildFour name={name}/>
    </div>
  )
}
