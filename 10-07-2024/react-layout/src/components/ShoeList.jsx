import React from 'react';
import styles from './ShoeList.module.css';

const ShoeList = ({ shoes, filter, deleteShoe }) => {
  return (
    <ul className={styles.list}>
      {shoes
        .filter((shoe) => shoe.brand.toLowerCase().includes(filter.toLowerCase()))
        .map((shoe) => (
          <li key={shoe.id} className={styles.item}>
            <span>{shoe.brand}</span>
            <span>{shoe.model}</span>
            <span>{shoe.size}</span>
            <button onClick={() => deleteShoe(shoe.id)} className={styles.deleteButton}>Delete</button>
          </li>
        ))}
    </ul>
  );
};

export default ShoeList;
