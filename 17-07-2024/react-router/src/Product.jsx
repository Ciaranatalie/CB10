import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';

const Product = ({product, addToCart, onProductClick}) => {

    return (
        <div className="product" onClick={() => onProductClick(product)}>
        <div className="price-tag"> € {product.price}</div>
        <img src={product.images[0]} alt={product.title} onClick={() => onProductClick(product)} />
        <h3 onClick={() => onProductClick(product)} > {product.title}</h3>
        <div className="product-details">
        <button onClick={(e) => { e.stopPropagation(); addToCart(product); }} className="add-to-cart-button">
                Add to Cart<FontAwesomeIcon icon={faBagShopping}/> 
            </button>
        </div>
    </div>
);
}; 



export default Product;