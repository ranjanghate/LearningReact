import React, { useState } from 'react'
import UseEffectOnce from './UseEffectOnce'

function ToggleDisplay() {
  const [display, setDisplay] = useState(false)

  return (
    <div>
      <button onClick={ () => setDisplay(!display) }>Toggle Display</button>
      { display && <UseEffectOnce />}
    </div>
  )
}

export default ToggleDisplay