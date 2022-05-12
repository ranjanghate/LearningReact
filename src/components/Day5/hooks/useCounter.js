import { useState } from 'react'

function useCounter(diff) {
  const [count, setCount] = useState(0)

  const increment = () => {
    return setCount(prevCount => prevCount + diff)
  }

  const decrement = () => {
    return setCount(prevCount => prevCount - diff)
  }

  const reset = () => {
    return setCount(0)
  }

  return [count, increment, decrement, reset]
}

export default useCounter