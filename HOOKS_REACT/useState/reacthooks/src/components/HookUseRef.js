import {useEffect, useState, useRef} from 'react'

const HookUseRef = () => {

    //1 useref
    const numberRef = useRef(0)
    const [counter, setCounter] = useState(0)
    const [counterB, setCounterB] = useState(0)

    useEffect(() => {
        numberRef.current = numberRef.current + 1;
    })

    //2 useRef e Dom

    const inputRef = useRef()
    const [text, setText] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(inputRef.current.value)

        setText("");

        inputRef.current.focus();
    }

  return ( 
    <div>
        <h2>useRef</h2>
        {/* useRef */}
        <p>O componente renderizou: {numberRef.current} </p>
        <p>Counter 1: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Contador A</button>

        <p>Counter 2: {counterB}</p>
        <button onClick={() => setCounterB(counterB + 1)}>Contador A</button>
       <form onSubmit={handleSubmit}>
         {/* 2 useref e dom */}

         <input type="text" name="" id="" ref={inputRef}  value={text} onChange={(e) => setText(e.target.value)}/>
        <input type="submit" name="" id=""  value="Enviar"/>
       </form>
        <hr />
    </div>
  )
}

export default HookUseRef