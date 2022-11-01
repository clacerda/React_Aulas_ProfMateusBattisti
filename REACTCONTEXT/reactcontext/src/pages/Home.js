
// import { useContext } from "react"
import ChangeCount from "../components/ChangeCount"
// import {CounterContext} from "../context/CounterContext"

// 4 refatorando hook
import { useCounterContext } from "../hooks/useCounterContext"

const Home = () => {

//  const {counter} = useContext(CounterContext)
const {counter} = useCounterContext();

  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* Alterando o valor contexto */}

      <ChangeCount />
    </div>
  )
}

export default Home