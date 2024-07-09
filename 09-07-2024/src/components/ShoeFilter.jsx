import React from "react";

function ShoeFilter({ setFilter }) {
  return (
    <input
      type="text"
      onChange={(e) => setFilter(e.target.value)}
      placeholder="Filtra per nome"
    />
  );
}

export default ShoeFilter;
