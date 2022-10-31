import React, {createContext} from "react";

// 4 - importação de componentes
import FirtsComponents from "./components/FirtsComponents";

// 5 - desestruturando Props
import SecondComponent from "./components/SecondComponent";
import Destructuring, {Category} from "./components/Destructuring";

//6 - useState
import State from "./components/State"; 

//10 - Context
import Context from "./components/Context";

//8 - Type
type textOrNull = string | null;

//9 - Context
 

//9 - context
interface IappContext {
  language: string;
  framework: string;
  projects: number;
}

export const AppContext = createContext<IappContext | null>(null)



//9 - context
const contextValue: IappContext = {
  language: "Javascript",
  framework: "Express",
  projects: 5,
};


function App() {


  //1 - variáveis

  const name: string = "Claudio";
  const age: number = 30;
  const inWorking: boolean = true; 

  //2 - funções

  const userGreeting = (name: string):string => {
    return `Olá, ${name}`;
  }

  //8 - Types
  const myText:textOrNull = "Tem algum texto aqui"
  let mySecondText:textOrNull = null;
  
  mySecondText = null;

  return (
    <AppContext.Provider value={contextValue}>
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
                      tags={["TI", "TypeScript", "Js"]}
                      category={Category.PY} />

      <State />
      {
        myText &&
        <p>Tem texto na variável</p>
      }
      {
        mySecondText &&
        <p>Tem texto na variável 2</p>
      }
      <Context />
    </div>
    </AppContext.Provider>
    
  );
}

export default App;
