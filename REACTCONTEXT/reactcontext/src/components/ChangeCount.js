// 3 - alterando contexto

import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

import React from 'react'

const ChangeCount = () => {

    const {counter, setCounter} = useContext(CounterContext)

  return (
    <div>
        <button onClick={() => setCounter(counter + 1)}>Contar...</button>
    </div>
  )
}

export default ChangeCount