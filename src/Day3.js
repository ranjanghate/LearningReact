import React, { Component } from 'react'
import FrParentInput from './components/Day3/FrParentInput'
import ParentComponent from './components/Day3/ParentComponent'
import ParentRef from './components/Day3/ParentRef'
import PortalDemo from './components/Day3/PortalDemo'
import RefComponent from './components/Day3/RefComponent'
import ErrorHandling from './components/Day3/ErrorHandling'
import ButtonCounter from './components/Day3/ButtonCounter'
import HoverCounter from './components/Day3/HoverCounter'
import ClickCounter from './components/Day3/ClickCounter'
import HoverCounter2 from './components/Day3/HoverCounter2'
import Counter from './components/Day3/Counter'
import ComponentA from './components/Day3/ComponentA'
import { UserProvider } from './components/Day3/userContext'
import PostList from './components/Day3/PostList'
import PostForm from './components/Day3/PostForm'

export default class Day3 extends Component {
  render() {
    return (
      <div>
        <PostForm />
        <PostList />

        {/* Consuming a Context */}
        <UserProvider value="Hello">
          <ComponentA/>
        </UserProvider> 
        <Counter 
          render={(count, incrementCount) => (
            <ClickCounter count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter 
          render={(count, incrementCount) => (
            <HoverCounter2 count={count} incrementCount={incrementCount} />
          )}
        />
        <HoverCounter />
        <ButtonCounter msg='hello' />
        <ErrorHandling />
        <PortalDemo />
        <FrParentInput />
        <ParentRef />
        <RefComponent />
        <ParentComponent />   {/* React Memo */}
      </div>
    )
  }
}
