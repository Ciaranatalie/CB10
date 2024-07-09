import React, { useState } from 'react';
import ShoeForm from './components/ShoeForm';
import Shoe from './components/ShoeList';
import ShoeFilter from './components/ShoeFilter';
import './App.css';

const initialShoes = [
  { id: crypto.randomUUID(), brand: 'Nike', model: 'Air Max', size: 42 },
  { id: crypto.randomUUID(), brand: 'Adidas', model: 'Ultraboost', size: 43 },
];

function App() {
  const [shoes, setShoes] = useState(initialShoes);
  const [filter, setFilter] = useState('');

  const handleAddShoe = (shoe) => {
    const newShoe = { ...shoe, id: crypto.randomUUID() };
    setShoes([...shoes, newShoe]);
  };

  const handleDeleteShoe = (e) => {
    const newShoes = shoes.filter(shoe => shoe.id !== e.target.id);
    setShoes(newShoes);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="App">
      <h1>Shoe Catalog</h1>
      <ShoeForm onAddShoe={handleAddShoe} />
      <ShoeFilter onFilterChange={handleFilterChange} />
      <ul>
        {shoes
          .filter(shoe => shoe.brand.toLowerCase().includes(filter.toLowerCase()))
          .map(shoe => (
            <Shoe key={shoe.id} shoe={shoe} onDelete={handleDeleteShoe} />
          ))}
      </ul>
    </div>
  );
}

export default App;