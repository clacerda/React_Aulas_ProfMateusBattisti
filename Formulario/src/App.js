 
import './App.css';
import MyForms from './Components/MyForms';

function App() {
  return (
    <div className="App">
       <h2>Forms</h2>
       <MyForms user={{name: "Josias", email: "Josias@teste.com"}}/>
    </div>
  );
}

export default App;
