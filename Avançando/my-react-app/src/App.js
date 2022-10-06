//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Fragment from './components/Fragment';
/*import CarDetails from './components/CarDetails';
import ConditionalRender from './components/ConditionalRender';
import ListRender from './components/ListRender';
import ShowUserName from './components/ShowUserName';*/
import Container from './components/Container'
// import ExecuteFunction from './components/ExecuteFunction';
// import Message from './components/Message';
// import ChangeMessageState from './components/ChangeMessageState';
import UserDetail from './components/UserDetail';

//import MinhaFoto from './assets/1517517204212.jpg'
//import ManageData from './components/ManageData';

function App() {

  //const name = "Claudio2"
  //const [userName] = useState("Claudio")


  // function showMessage(){
  //   console.log("Evento teste")
  // }

  /*const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: "Polo", color: "vermelho", newCar: false, km: 10},
    {id: 3, brand: "Monza", color: "azul", newCar: false, km: 20}
  ]*/

  // const [message, setMessage] = useState("Holá que tal?")

  // const handleMessage = (msg) =>{
  //   setMessage(msg)
  // }

  const peoples = [
    {id: 1, name: "Claudio", age: 33, profession: "Analista"},
    {id: 2, name: "Andrea", age: 34, profession: "Designer"},
    {id: 3, name: "Diana", age: 2, profession: "AuAu"}
  ]

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

       {/*<ManageData /> 
       <ListRender /> 

       <ConditionalRender />*/} 
       {/*Props
       <ShowUserName name= {userName}/>*/}
       {/*Destructuring
        <CarDetails brand="Tesla" km={10000} color="Azul" novo={true} />*/}

       {/*Reaproveitamento
       <CarDetails brand="Ford" km={20000} color="Vermelho" novo={false} />*/}
       {/*Reaproveitamento
       //<CarDetails brand="Renault" km={2000} color="Preto" novo={true} />*/}

       {/*looping em array*
       {cars.map((car) => (
          <CarDetails 
                     key = {car.id}
                     brand={car.brand}  
                     color={car.color} 
                     novo={car.newCar} 
                     km={car.km}
                     />
        )) }/}


         {/*Fragment*/}
          <Fragment propFragment="teste"/>

        {/*Children Component*/}
        <Container myValue="Child">
          <p>E este é o conteúdo</p>
        </Container>
        <Container myValue="Teste 2">
          <h5>E este é o conteúdo</h5>
        </Container>

        {/*Executar função
        <ExecuteFunction myFunction={showMessage} /> */}

        {/*State Lift
        <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} /> */}

      {/*Desafio*/}
      {
        peoples.map((people) => (
              <UserDetail  
                        key = {people.id}
                        name = {people.name}
                        age = {people.age}
                        profession = {people.profession}
                        />
        ))
      }

      
    </div>
  );
}

export default App;
