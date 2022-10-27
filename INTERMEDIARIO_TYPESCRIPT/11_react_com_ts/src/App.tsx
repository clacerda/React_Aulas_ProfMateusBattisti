import React from "react";

// 4 - importação de componentes
import FirtsComponents from "./components/FirtsComponents";

function App() {


  //1 - variáveis

  const name: string = "Claudio";
  const age: number = 30;
  const inWorking: boolean = true; 

  //2 - funções

  const userGreeting = (name: string):string => {
    return `Olá, ${name}`;
  }

  

  return (
    <div className="App">
      <h1>Typescript com React</h1>
      <h2>Nome: {name}</h2>
      <p>Idade: {age}</p>
      {!inWorking && (
        <p>Está trabalhando</p>
      )}

      <h3>{userGreeting(name)}</h3>
      <FirtsComponents/>
    </div>
  );
}

export default App;
