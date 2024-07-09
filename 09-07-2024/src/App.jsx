import React, { useState } from 'react';
import ShoeForm from './components/ShoeForm.jsx';
import ShoeList from './components/ShoeList.jsx';
import ShoeFilter from './components/ShoeFilter.jsx';
import './App.css';

function App() {
  const [shoes, setShoes] = useState([]);
  const [filter, setFilter] = useState('');

  const addShoe = (shoe) => {
    setShoes([...shoes, shoe]);
  };

  const deleteShoe = (index) => {
    setShoes(shoes.filter((_, i) => i !== index));
  };

  const filteredShoes = shoes.filter((shoe) =>
    shoe.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Catalogo Scarpe</h1>
      <ShoeForm addShoe={addShoe} />
      <ShoeFilter setFilter={setFilter} />
      <ShoeList shoes={filteredShoes} deleteShoe={deleteShoe} />
    </div>
  );
}

export default App;
