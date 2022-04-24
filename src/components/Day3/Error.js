import React from 'react'

function Error({heroname}) {
  if (heroname === 'joker') {
    throw new Error('Not A Hero')
  }

  return (
    <div>{heroname}</div>
  )
}

export default Error
