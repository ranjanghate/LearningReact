import React from 'react'
import ArrayState from './components/Day4/ArrayState'
import DataFetching from './components/Day4/DataFetching'
import HookCounter from './components/Day4/HookCounter'
import HookCounter2 from './components/Day4/HookCounter2'
import IntervalHookCounter from './components/Day4/IntervalHookCounter'
import ObjectState from './components/Day4/ObjectState'
import PostFetch from './components/Day4/PostFetch'
import ToggleDisplay from './components/Day4/ToggleDisplay'
import UseEffectCounter from './components/Day4/UseEffectCounter'
import UseEffectOnce from './components/Day4/UseEffectOnce'
import MainComponent from './components/Day4/MainComponent'
import { UserProvider } from './components/Day4/userContext'
import { AddressProvider } from './components/Day4/addressContext'
import UseReducer from './components/Day4/UseReducer'
import ObjectUseReducer from './components/Day4/ObjectUseReducer'
import MultipleUseReducer from './components/Day4/MultipleUseReducer'

function Day4() {
  return (
    <div>
      <MultipleUseReducer />
      <ObjectUseReducer />
      <UseReducer />
      <AddressProvider value='Mumbai'>
        <UserProvider value='Ramesh'>
          <MainComponent />
        </UserProvider>
      </AddressProvider>
      <PostFetch />
      <DataFetching />
      <IntervalHookCounter />
      <ToggleDisplay />
      <UseEffectOnce />
      <UseEffectCounter />
      <ArrayState />
      <ObjectState />
      <HookCounter2 />
      <HookCounter/>
    </div>
  )
}

export default Day4
