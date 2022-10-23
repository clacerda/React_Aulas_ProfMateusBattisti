 import './App.css';
 import {useState, useEffect} from 'react';

 // 4 - custom hook
 import {useFetch} from "./hooks/useFetch"

function App() {

  //const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const url = "http://localhost:3000/products";

  let idProduct = 1;
 
   //4 - custom hook
   const {data : items, httpConfig, loading, error } = useFetch(url, idProduct);
 

  const handleSubmit = async (event) => {

        event.preventDefault();
       
        const product = {
          name,
          price,
        };
         
        httpConfig(product, "POST")

        setName("");
        setPrice("");
  };

  const handleDeleteProduct = async (id) => {
    httpConfig(id, "DELETE")
      
  }
 

  return (
  <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - Loading */}
      {loading && <p> Carregando dados...</p>}
      {error && <p>{error}</p> } {console.log(error)}
      {!error && (<ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}   
           <button value={product.id} 
           onClick={() => handleDeleteProduct(product.id)}>Deletar</button> </li>
        ))}
      </ul>)}

      <div className="add-product">
        <form onSubmit={handleSubmit}>

          <label>
            Nome: <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)}/>
          </label>

          <label>
            Preço: <input type="number" name="price" value={price} onChange={(event) => setPrice(event.target.value)}/>
          </label>

             
          {/* 7 - State de loading no post*/}
            {loading && <input type="submit" value="Aguarde"  disabled/>}
            {!loading && <input type="submit" value="Criar" />}

         
        </form>
      </div>
  </div>
  );
}

export default App;
