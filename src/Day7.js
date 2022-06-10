import React from 'react'
import { CakeView } from './components/Day7/redux-toolkit/features/cake/CakeView'
import { IcecreamView } from './components/Day7/redux-toolkit/features/icecream/IcecreamView'
import { UserView } from './components/Day7/redux-toolkit/features/user/UserView'

const Day7 = () => {
  return (
    <div>
      <IcecreamView />
      <CakeView />
      <UserView />
    </div>
  )
}

export default Day7