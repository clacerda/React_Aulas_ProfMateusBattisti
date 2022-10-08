 
import './App.css';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      {/* CSS Global */}
       <h1>React com CSS</h1>
      {/* CSS de componente */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>

      {/* CSS inline */}
      <p style={{color: "white", padding: "25px", borderTop: "2px dotted red"}}>Este elemento foi estilizado de forma inline</p>
    </div>
  );
}

export default App;
