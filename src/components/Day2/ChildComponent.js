import React from 'react'

function ChildComponent(props) {
  return (
    <button onClick={() => props.greetParent('Child') }> Greet Parent </button>
  )
}

export default ChildComponent
