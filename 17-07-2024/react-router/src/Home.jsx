import React, { useState, useEffect }from 'react';
import Product from './Product';

const Home = ({ products, addToCart }) => {
    return (
        <div>
            <h1>Online Shopping</h1>
            <div className="products">
                {products.map(product => (
                    <Product key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default Home;