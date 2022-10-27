import React from "react";

// 4 - importação de componentes
import FirtsComponents from "./components/FirtsComponents";

// 5 - desestruturando Props
import SecondComponent from "./components/SecondComponent";
import Destructuring from "./components/Destructuring";

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
      <SecondComponent name="Birulei"/>
      <Destructuring  title="Primeiro post" 
                      content="TypeScript"
                      commentsQty={10}
                      tags={["TI", "TypeScript", "Js"]} />
    </div>
  );
}

export default App;
