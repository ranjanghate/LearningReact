import React from 'react'

function MemoComponent({name}) {
  console.log('Rendering Memo component')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComponent)
// Using memo will cause React to skip rendering a component if its props have not changed.
