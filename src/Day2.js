import React from 'react'

import ParentComponent from './components/Day2/ParentComponent';
import UserGreeting from './components/Day2/UserGreeting';
import NameList from './components/Day2/NameList';
import StyleSheet from './components/Day2/StyleSheet';
import Inline from './components/Day2/Inline';
import './appStyles.css' // CSS Style sheets (applies to child component as well)
import styles from './appStyles.module.css' // CSS Modules (Only applies to current component) 
import Form from './components/Day2/Form';
import LifeComponentA from './components/Day2/LifeComponentA';
import FragmentDemo from './components/Day2/FragmentDemo';
import ParentComponent2 from './components/Day2/ParentComponent2';

function Day2() {
  return (
    <div>

      <ParentComponent2 />

      <FragmentDemo />

      <LifeComponentA />

      <Form />
      <div className='error'> Error </div>
      <div className={styles.success}> Success </div>

      <Inline />

      <StyleSheet primary={true} />

      <NameList />

      <UserGreeting />
      <ParentComponent />
    </div>
  )
}

export default Day2
