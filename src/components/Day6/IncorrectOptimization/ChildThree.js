import React from 'react'

export const ChildThree = ({children, name}) => {
  console.log('Child Three renders')

  return (
    <div>
      <div>ChildThree</div>
      <span> {children} {name} </span>
    </div>
  )
}

export const MemoizedChildThree = React.memo(ChildThree)
