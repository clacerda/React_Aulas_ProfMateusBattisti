import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from 'react'


function App() {

  const n = 15;
  const [name] = useState("Odin")

  return (
    <div className="App">
      {/* CSS Global */}
       <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>

      {/* CSS inline */}
      <p style={{color: "white", padding: "25px", borderTop: "2px dotted red"}}>Este elemento foi estilizado de forma inline</p>

      {/* CSS inline dinâmico*/}
      <h2 style={n < 16 ? ({color:"purple"}) : ({color:"green"})}>CSS dinâmico com texto</h2>
      <h2 style={name === "Odin" ? ({color:"yellow", backgroundColor: '#000'}) : null}>CSS dinâmico com texto</h2>
    </div>
  );
}

export default App;
