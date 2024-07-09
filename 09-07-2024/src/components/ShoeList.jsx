import React from 'react';

function ShoeList({ shoes, deleteShoe }) {
  return (
    <div className="shoe-list">
      {shoes.map((shoe, index) => (
        <div key={index} className="shoe-item">
          <span>{shoe.name} - Taglia: {shoe.size}</span>
          <button onClick={() => deleteShoe(index)}>Cancella</button>
        </div>
      ))}
    </div>
  );
}

export default ShoeList;
