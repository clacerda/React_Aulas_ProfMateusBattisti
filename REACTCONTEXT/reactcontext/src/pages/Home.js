
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

 const {color, dispatch} = useTitleColorContext();

// 6 alterando state complexo
  const setTitleColor = (color) => {
    dispatch({type: color});
  }

  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/* Alterando o valor contexto */}

      <ChangeCount />
      <div>
        <button onClick={() => setTitleColor("RED")}>Vermelho</button>
        <button onClick={() => setTitleColor("BLUE")}>Vermelho</button> 
      </div>
    </div>
  )
}

export default Home