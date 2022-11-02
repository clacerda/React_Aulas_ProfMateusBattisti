
// import { useContext } from "react"
import ChangeCount from "../components/ChangeCount"
// import {CounterContext} from "../context/CounterContext"

// 4 refatorando hook
import { useCounterContext } from "../hooks/useCounterContext"

//5 context mais complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {

//  const {counter} = useContext(CounterContext)
 const {counter} = useCounterContext();

 const {color} = useTitleColorContext();

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* Alterando o valor contexto */}

      <ChangeCount />
    </div>
  )
}

export default Home