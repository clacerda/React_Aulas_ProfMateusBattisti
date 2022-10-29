import { useParams } from "react-router-dom" ;
import { useFetch } from "../hooks/useFetch";

const Product = () => {

    //4 - Rota dinâmica
    const {id} = useParams();

    const url = "http://localhost:3000/products/" + id;

    //5 Carregamento de dado individual
    const {data: product, loading, error} = useFetch(url)

    console.log(product)

  return ( <>
        <p>ID do produto: {id} </p>
        {error && <p>Ocorreu um erro</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div>
                <h1>{product.name}</h1>
                <p>R${product.price}</p>
            </div>
        )}
  </>
  )
}

export default Product