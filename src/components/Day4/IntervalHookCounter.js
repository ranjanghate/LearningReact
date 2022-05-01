import React, { useEffect, useState } from 'react'

function IntervalHookCounter() {

  const [count, setCount] = useState(0)

  const tick = () => {
    console.log('Counter')
    setCount((prevCount) => (prevCount + 1))
  }

  useEffect(() => {
   const interval = setInterval(tick, 1000);
   return () => {
     console.log('Interval Cleared')
     clearInterval(interval)
   }
  }, [])

  return (
    <div>
      Count {count}      
    </div>
  )
}

export default IntervalHookCounter
