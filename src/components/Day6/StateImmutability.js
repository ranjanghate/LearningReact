import React, { useState } from 'react'

function StateImmutability() {

  const [name, setName] = useState( { fname: 'Klark', lname: 'Kent' })

  const updateName = () => {
    const newName = { ...name }
    newName.fname = 'Bruce'
    newName.lname = 'Wayne'
    setName(newName)
  }

  console.log('Render')
  return (
    <div>
      <button onClick={updateName}>  Update Name </button>
      <div> {name.fname} </div>
      <div> {name.lname} </div>
    </div>
  )
}

export default StateImmutability
