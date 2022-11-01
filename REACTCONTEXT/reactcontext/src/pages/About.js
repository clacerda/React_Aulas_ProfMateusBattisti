

// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

// 4 refatorando hook
import { useCounterContext } from "../hooks/useCounterContext"

const About = () => {
  
  const {counter} = useCounterContext()

  return (
    <div>
      <h1>about</h1>
       <p>Valor do contador: {counter}</p>
      {/* Alterando o valor contexto */}
  
    </div>  
  ) 
}
   
export default About