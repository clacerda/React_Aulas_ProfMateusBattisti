import {useEffect, useState} from 'react'

const HookUseEffect = () => {

    //1 - useEffect sem dependĂȘncias.
    useEffect(() => {
     //   console.log("Estou sendo executado")
    });


    const [number, setNumber] = useState(1)

    const changeSomenthing = () => {
        setNumber(number + 1)
    }

    // 2 - array de dependĂȘncias vazio
    useEffect(() => {
    //    console.log("Executado apenas 1 vez")
    }, [])

    // 3- array de dependĂȘncia cheio

    const [anoterNumber, setAnotherNumber] = useState(0)

    useEffect(() => {
        if (anoterNumber > 0 ) {
         //   console.log("Executado apenas quando o anotherNumber muda")
        }
    }, [anoterNumber])
    
    //4 - CleanUp useEffect

    useEffect(() => {
         const timer = setTimeout(() => {
       //     console.log("Hello World")

        // setAnotherNumber(anoterNumber + 1)
         }, 2000)

        return () => clearTimeout(timer)
    }, [anoterNumber])

    

  return (
    <div>
        <h2>useEffect</h2>
        <p>Number: {number}</p>
        <button onClick={changeSomenthing}>Executar!</button>
        <p>AnotherNumber: {anoterNumber} </p>
        <button onClick={() => setAnotherNumber(anoterNumber + 1)}>Mudar AnotherNumber</button>
        <hr />
    </div>
  )
}

export default HookUseEffect