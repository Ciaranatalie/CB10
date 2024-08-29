import {useContext} from "react";
import { ProductContext } from "../providers/ProductContext";

function Cart() {
    const {products} = useContext(ProductContext)
}
return (
    <div>Cart
        <ul>
        {products.map((product)=> {
            return (
                <li className="flex gap-2" key={product.id}>
                    {product.title}
                    <button
                    className= "bg-green-400 p2"
                    onClick={() => handleAdd(product)}
                    >
                        Add
                    </button>
                </li>
            );
        })}
        </ul>
    </div>
)

export default Cart;