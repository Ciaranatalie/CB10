import React, { useState, useEffect } from 'react';
import Product from './Product';

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);

    const addToCart = (product) => {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = [...cart, product];
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    return (
        <div>
            <h1>Products</h1>
        <div className="products">
            {products.map(product => (
            <Product key={product.id} product={product} addToCart={addToCart} />
            ))}
        </div>
        </div>
    );
};

export default Home;
