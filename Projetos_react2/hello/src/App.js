//components 
import FirstComponent from './components/firstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';


//css
import './App.css';
import Challenge from './components/Challenge';


function App() {
  return (
    
    <div className="App">
      {/* Definição de componente */}
       <h1>Fundamentos React</h1> 
       <FirstComponent />
       <TemplateExpressions />
       <MyComponent />
       <Events />
       <Challenge />
    </div>
  );
}

export default App;
