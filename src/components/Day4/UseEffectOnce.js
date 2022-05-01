import React, { useState, useEffect } from 'react'

function UseEffectOnce() {

  const [X, setX] = useState(0)
  const [Y, setY] = useState(0)

  const mouseCordinate = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseCordinate)

    // this return will execute when component will unmount
    return () => {
      console.log('Remove mouse Logger')
      window.removeEventListener('mousemove', mouseCordinate)
    }
  }, [])


  // To execute useEffect only once, just pass empty array with useEffect

  return (
    <div>
      X - {X}  Y - {Y}
    </div>
  )
}

export default UseEffectOnce