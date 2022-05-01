import React, {useContext} from 'react'
import { UserConsumer } from './userContext'
import { AddressConsumer } from './addressContext'

function ChildComponent() {
  const name = useContext(UserConsumer)
  const city = useContext(AddressConsumer)

  return (
    <div>ChildComponent  {name}  {city} </div>
  )
}

export default ChildComponent
