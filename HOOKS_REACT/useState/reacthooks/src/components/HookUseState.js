import {useState} from 'react'

const HookUseState = () => {

 //1 - useState
 let userName = "João"

 const [name, setName] = useState("Claudio")

 const ChangeName = () => {
    userName = "João souza"
    setName("Betoneira")
 }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={ChangeName}>Mudar nome</button>
        <hr />
    </div>
  )
}

export default HookUseState