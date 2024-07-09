import React from 'react';

function ShoeFilter({ onFilterChange }) {
  return (
    <input type="text" placeholder="Filter by brand" onChange={onFilterChange} />
  );
}

export default ShoeFilter;
