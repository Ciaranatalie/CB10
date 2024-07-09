import React, { useState } from 'react';

function ShoeForm({ addShoe }) {
  const [name, setName] = useState('');
  const [size, setSize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && size.trim()) {
      addShoe({ name, size });
      setName('');
      setSize('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nome Scarpa"
      />
      <input
        type="text"
        value={size}
        onChange={(e) => setSize(e.target.value)}
        placeholder="Taglia"
      />
      <button type="submit">Aggiungi</button>
    </form>
  );
}

export default ShoeForm;
