import React, { useState, useEffect } from 'react'

function UseEffectCounter() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('Title Updated')
    document.title = `You Clicked ${count} time`
  }, [count])
  
  // in that array we need to pass prop or state which we need to watch if those props or state were to change
  // the effect will be executed

  return (
    <div>
      <input type="text" value = {name} onChange={ (e) => { setName(e.target.value)}}/>
      <button onClick={ () => { setCount(count + 1)}}> Click {count} </button>
    </div>
  )
}

export default UseEffectCounter
