import {useRef} from 'react'
import SomeComponent from '../components/SomeComponent'

const HookUseImperativeHandle = () => {

    const componenteRef = useRef(); 

  return (
    <div>
        <h2>HookUseImperativeHandle</h2>
        <SomeComponent ref={componenteRef} />     
        <button onClick={() => componenteRef.current.validate()}>Validar</button>       
        <hr />
    </div>
  )
}

export default HookUseImperativeHandle