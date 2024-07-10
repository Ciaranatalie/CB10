import React from 'react';
import styles from './ShoeFilter.module.css';

const ShoeFilter = ({ setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Filter by brand"
      onChange={handleChange}
      className={styles.input}
    />
  );
};

export default ShoeFilter;
