import React from 'react'
import Person from './Person'

function NameList() {
  const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
  const nameList = names.map((name, index) => (<h1 key={index}> {name} </h1> ))
  const persons = [
    {
      id: 1,
      name: 'Adam',
      age: '23',
      language: 'C++'
    },
    {
      id: 2,
      name: 'Andrew',
      age: '25',
      language: 'Java'
    },
    {
      id: 3,
      name: 'Lara',
      age: '27',
      language: 'Ruby'
    }
  ]
  const presonList = persons.map( person => <Person key={person.id} person={person} />)
  return (
    <div> 
    {presonList}
    {
      nameList
      // names.map(name => (<h1> {name} </h1> ))
    }
    </div>
  )
}

export default NameList