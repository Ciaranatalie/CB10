import React, { useState, useEffect }from 'react';
import Product from './Product';
import ProductModal from './ProductModal';

const Home = ({ products, addToCart }) => {
    const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

    return (
        <div>
            <h1>Online Shopping</h1>
            <div className="products">
                {products.map(product => (
                    <div key={product.id} onClick={() => openModal(product)}>
                        <Product product={product} addToCart={addToCart} />
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <ProductModal 
                    product={selectedProduct} 
                    onClose={closeModal} 
                    addToCart={addToCart}
                />
            )}
        </div>
    );
};


export default Home;