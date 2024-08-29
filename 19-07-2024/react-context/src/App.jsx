import {useContext, useEffect, useState} from "react";
import { SetProductContext } from "./providers/ProductContext";

function App() {
  const [productList, setProductList] = useState([])
  const {setProducts} = useContext(SetProductContext);
  const {products} = useContext(ProductContext)
  
  const handleAdd = () => {
    setProducts(products +1);
  };

  useEffect(() => {
    fetch("http://localhost:3000/products")
    .then((res) => res.json())
    .then((res) => console.log(res));
  },[]);

  return (
      <div>
        <ul>
        {productList.map(product => {
          return 
            <li className="flex gap-2" key={product.id}>
              {product.title}
        <button 
        className="bg-green-400 p-2"
        onClick={() => {handleAdd}>Add</button>
        </li>
        );
        })}
        </ul>
      </div>
  )
}

export default App
