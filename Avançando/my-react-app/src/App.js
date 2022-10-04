//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ShowUserName from './components/ShowUserName';

//import MinhaFoto from './assets/1517517204212.jpg'
//import ManageData from './components/ManageData';

function App() {

  const name = "Claudio2"
  const [userName] = useState("Claudio")


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
       {/*Props*/}
       <ShowUserName name= {userName}/>
       {/*Destructuring*/}
       <CarDetails brand="Tesla" km={10000} color="Azul"/>

       {/*Reaproveitamento*/}
       <CarDetails brand="Ford" km={20000} color="Vermelho"/>
       {/*Reaproveitamento*/}
       <CarDetails brand="Renault" km={2000} color="Preto"/>
    </div>
  );
}

export default App;
