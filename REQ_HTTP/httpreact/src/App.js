 import './App.css';
 import {useState, useEffect} from 'react';

 // 4 - custom hook
 import {useFetch} from "./hooks/useFetch"

function App() {

  //const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const url = "http://localhost:3000/products";

   //4 - custom hook
   const {data : items, httpConfig, loading, erro} = useFetch(url);

  //  console.log(data)

  //1 - resgatando dados 
  // useEffect( () => {
  //    async function fetchData() {
  //       const res = await fetch(url)
  //       const data = await res.json()

  //       setProducts(data)
  //    }

  //    fetchData();

  // }, []);

  // 2 - add produtos

  const handleSubmit = async (event) => {

        event.preventDefault();

        const product = {
          name,
          price,
        };

        // const res = await fetch(url, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify(product),
        // });
        
        // // 3 - Carregamento dinâmico
        // const addedProduct = await res.json();

        // setProducts((prevProducts) => [...prevProducts, addedProduct]);

        // 5 - Refatorando POST

        httpConfig(product, "POST")

        setName("");
        setPrice("");
  };
 

  return (
  <div className="App">
      <h1>Lista de produtos</h1>
      {/* 6 - Loading */}
      {loading && <p> Carregando dados...</p>}
      {erro & <p>{erro}</p>}
      {!erro && (<ul>
        {items && items.map((product) => (
          <li key={product.id}>{product.name} - R$: {product.price}</li>
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
