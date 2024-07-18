import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import './ProductModal.css'; 

const ProductModal = ({ product, onClose, addToCart }) => {
  if (!product) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <img src={product.images[0]} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>Price: € {product.price}</p>
        <Link to={`/product/${product.id}`} onClick={onClose}>Go to Product Page</Link>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>,
    document.body
  );
};

export default ProductModal;
