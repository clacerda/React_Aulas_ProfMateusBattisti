//UseContext
import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'

import React from 'react'
import HookUseEffect from '../components/HookUseEffect'
import HookUseReducer from '../components/HookUseReducer'
import HookUseState from '../components/HookUseState'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'



const Home = () => {

    const {contextValue} = useContext(SomeContext)

  return (
    <div>
        <HookUseState />
        <HookUseReducer />
        <HookUseEffect />
        
        <h2>useContext</h2>
        <p>Valor context: {contextValue}</p>
        <hr />

        <HookUseRef />
        <HookUseCallback />
        <HookUseMemo />
    </div>
  )
}

export default Home