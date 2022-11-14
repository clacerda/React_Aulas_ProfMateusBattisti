import {useState} from 'react'

const HookUseState = () => {

 //1 - useState
 let userName = "João"
 
 const [name, setName] = useState("Claudio")

 const ChangeName = () => {
    userName = "João souza"
    setName("Betoneira")
 }

  //2 - useState e input
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Envio para uma API

    console.log(age);
  }

  return (
    <div>
        {/* 1 - useState */}
        <h2>useState</h2>
        <p>Variável: {userName}</p>
        <p>useState: {name}</p>
        <button onClick={ChangeName}>Mudar nome</button>
        <hr />

        {/* UseState e Input */}
        <p>Digite a sua idade:</p>
        <form onSubmit={handleSubmit}>
            <input type="text"   id="" value={age} onChange={(e) => setAge(e.target.value)} />
            <p>Você tem: {age} anos!</p>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default HookUseState