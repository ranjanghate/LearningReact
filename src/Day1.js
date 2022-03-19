import React from 'react'

import Greet from './components/Day1/Greet';
import Welcome from './components/Day1/Welcome';
import { WithJsx, WithoutJsx } from './components/Day1/JsxTest';
import Message from './components/Day1/Message';
import Counter from './components/Day1/Counter';
import FunctionClick from './components/Day1/FunctionClick';
import ClassClick from './components/Day1/ClassClick';
import EventBind from './components/Day1/EventBind';

function Day1() {
  return (
      <div>
        <EventBind/>
        <FunctionClick />
        <ClassClick />        
        <Counter />
        <Message />
        <Greet name="Bruce" heroName="Batman" > 
          <p> This is a child Element</p>
        </Greet>
        <Greet name="Clark" heroName="Superman" > 
          <button> Action </button>
        </Greet>
        <Greet name="Diana" heroName="WonderWoman" > 
        </Greet>
        <Welcome name="Bruce" heroName="Batman" > 
          <p> This is a child Element for Class Component</p>
        </Welcome>
        <Welcome name="Clark" heroName="Superman" > 
          <button> Action Class Component</button>
        </Welcome>
        <Welcome name="Diana" heroName="WonderWoman" > 
        </Welcome>
        <WithJsx />
        <WithoutJsx />
      </div>
   )
}

export default Day1
