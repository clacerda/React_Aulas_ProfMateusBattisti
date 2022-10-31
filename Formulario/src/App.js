 
import './App.css';
import MyForms from './Components/MyForms';

function App() {
  return (
    <div className="App">
       <h2>Forms</h2>
       <MyForms user={{name: "Claudio", email: "Claudio@teste.com", bio: "Sou analista", role: "adm"}}/>
    </div>
  );
}

export default App;
