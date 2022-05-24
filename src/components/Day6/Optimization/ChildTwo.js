import React from 'react'

export const ChildTwo = (name) => {
  console.log('Child Two renders')
  return (
    <div>ChildTwo</div>
  )
}

export const MemoizedChildTwo = React.memo(ChildTwo)
