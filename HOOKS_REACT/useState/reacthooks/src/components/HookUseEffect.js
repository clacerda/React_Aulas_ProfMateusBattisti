import {useEffect, useState} from 'react'

const HookUseEffect = () => {

    //1 - useEffect sem dependências.
    useEffect(() => {
        console.log("Estou sendo executado")
    });


    const [number, setNumber] = useState(1)

    const changeSomenthing = () => {
        setNumber(number + 1)
    }

    // 2 - array de dependências vazio
    useEffect(() => {
        console.log("Executado apenas 1 vez")
    }, [])

  return (
    <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomenthing}>Executar!</button>
        <hr />
    </div>
  )
}

export default HookUseEffect