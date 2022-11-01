

import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const About = () => {
  
  const {counter} = useContext(CounterContext)

  return (
    <div>
      <h1>about</h1>
       <p>Valor do contador: {counter}</p>
      {/* Alterando o valor contexto */}
  
    </div>  
  ) 
}
   
export default About