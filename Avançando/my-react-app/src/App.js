//import logo from './logo.svg';
import './App.css';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';

//import MinhaFoto from './assets/1517517204212.jpg'
//import ManageData from './components/ManageData';

function App() {
  return (
    <div className="App">
       <h1>Avançando React</h1>
      {/* <div>
         Imagem em public 
        <img src="/jpg-vs-jpeg.jpg" alt="Imagem" />
       </div>
       
       <div>
        <img src={MinhaFoto} alt="Eu" />
       </div>*/}

       {/*<ManageData /> */}


       <ListRender />

       <ConditionalRender />
    </div>
  );
}

export default App;
