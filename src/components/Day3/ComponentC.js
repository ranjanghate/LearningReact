import React, { Component } from 'react'
import ComponentA from './ComponentA'
import { UserConsumer } from './userContext'

export default class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {
          (message) => {
            return <div> This is {message} </div>
          }
        }
      </UserConsumer>
    )
  }
}
