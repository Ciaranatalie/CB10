import React from 'react';

function Shoe({ shoe, onDelete }) {
  const { id, brand, model, size } = shoe;

  return (
    <li>
      {brand} {model} (Size: {size})
      <button id={id} onClick={onDelete}>delete</button>
    </li>
  );
}

export default Shoe;
