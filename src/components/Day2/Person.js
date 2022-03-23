import React from 'react'

function Person({person}) {  
  return (
    <div> 
      Hey I am {person.name}. I am {person.age} and I know {person.language} 
    </div>
  )
}

export default Person