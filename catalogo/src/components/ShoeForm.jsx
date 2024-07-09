import React, { useState } from 'react';

function ShoeForm({ onAddShoe }) {
  const initialInput = { brand: '', model: '', size: '' };
  const [input, setInput] = useState(initialInput);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddShoe(input);
    setInput(initialInput);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Brand</label>
      <input id="brand" value={input.brand} onChange={handleChange} placeholder="Enter brand" />
      <label>Model</label>
      <input id="model" value={input.model} onChange={handleChange} placeholder="Enter model" />
      <label>Size</label>
      <input id="size" value={input.size} onChange={handleChange} placeholder="Enter size" />
      <button type="submit">Add Shoe</button>
    </form>
  );
}

export default ShoeForm;
