import React, { useReducer } from 'react'
import ComponentA from './components/Day5/ComponentA'
import ComponentB from './components/Day5/ComponentB'
import ComponentC from './components/Day5/ComponentC'
import CounterI from './components/Day5/CounterI'
import CounterII from './components/Day5/CounterII'
import DataFetchingReducer from './components/Day5/DataFetchingReducer'
import TitleUpdateI from './components/Day5/TitleUpdateI'
import TitleUpdateII from './components/Day5/TitleUpdateII'
import UseCallbackHook from './components/Day5/UseCallbackHook'
import UseMemoHook from './components/Day5/UseMemoHook'
import UseRef from './components/Day5/UseRef'
import UseRefTimer from './components/Day5/UseRefTimer'

export const CountContext = React.createContext()
const intialState = 0

const reducer = (state, action) => {
  switch(action) {
    case 'increment':
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return intialState
    default :
      return state
  }
}

function Day5() {

  const [count, dispatch] = useReducer(reducer, intialState)

  return (
   <div>
     <CounterI />
     <CounterII />
     <TitleUpdateII />
     <TitleUpdateI />
     < UseRefTimer />
     < UseRef />
     <UseMemoHook />
     <UseCallbackHook />
     <DataFetchingReducer />
    <CountContext.Provider value = {{countState: count, countDispatch: dispatch}}>
      <div>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </div>
    </CountContext.Provider>
  </div>
  )
}

export default Day5
