import React, { useEffect, useRef } from 'react'

function UseRef() {

  const inputField = useRef()

  useEffect(() => {
    inputField.current.focus()
  }, [])

  return (
    <div>
      <input ref={inputField} type='text'></input>
    </div>
  )
}

export default UseRef