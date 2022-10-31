import React from 'react'

const ChangeMessageState = ({handleMessage}) => {

    const messagem = ["Oi", "Olá", "Oi, tudo bem", "Adeus"]

  return (
    <div>
        <button onClick={() => handleMessage(messagem[0])}>1</button>
        <button onClick={() => handleMessage(messagem[1])}>2</button>
        <button onClick={() => handleMessage(messagem[2])}>3</button>
        <button onClick={() => handleMessage(messagem[3])}>4</button>
    </div>
  )
}

export default ChangeMessageState