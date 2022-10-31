import './App.css';
import MyComponent from './components/MyComponent';
import {useState} from 'react'
import Title from './components/Title';
import Carro from './components/Carro';


function App() {

  const n = 15;
  const [name] = useState("Odin")

  const redTitle = true;

  const carros = [
    {id: 1, modelo : "Tesla"},
    {id: 2, modelo : "Volks"},
    {id: 3, modelo : "Ford"},
  ]

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
 
      {/* Classe dinâmico*/}
      <h2 className={redTitle ? "red-title" : "title"}>
        Este título terá classe dinâmica
      </h2>

      {/* Css modules*/}
      <Title />

      {/* Desafio CSS*/}
      {
        carros.map((carro) => (
          <Carro 
            key = {carro.id}
            modelo = {carro.modelo}
          />
        ))
      }

    </div>
  );
}

export default App;
