
import { useContext } from "react"
import ChangeCount from "../components/ChangeCount"
import {CounterContext} from "../context/CounterContext"

const Home = () => {

  const {counter} = useContext(CounterContext)

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