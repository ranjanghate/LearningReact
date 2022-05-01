import React, { useState } from 'react'

function ObjectState() {
  const [user, setUser] = useState({first_name: '', last_name: ''})

  return (
    <div>
      <form>
        <input 
          type='text'
          value={user.first_name}
          onChange={ (e) => setUser({ ...user, first_name: e.target.value})} 
        />
        <input
          type='text'
          value={user.last_name}
          onChange={ (e) => setUser({ ...user, last_name: e.target.value})}
        />

        <h2>First Name - {user.first_name} </h2>
        <h2>Last Name - {user.last_name} </h2>
        <h2>{JSON.stringify(user)}</h2>
      </form>
    </div>
  )
}

export default ObjectState