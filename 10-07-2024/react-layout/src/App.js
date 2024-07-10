import React, { useState } from 'react';
import styles from './App.module.css';
import ShoeForm from './components/ShoeForm';
import ShoeList from './components/ShoeList';
import ShoeFilter from './components/ShoeFilter';
import Layout from './components/Layout';

const App = () => {
  const [shoes, setShoes] = useState([]);
  const [filter, setFilter] = useState('');

  const addShoe = (shoe) => {
    setShoes([...shoes, shoe]);
  };

  const deleteShoe = (id) => {
    setShoes(shoes.filter((shoe) => shoe.id !== id));
  };

  return (
    <Layout>
      <div className={styles.app}>
        <ShoeForm addShoe={addShoe} />
        <ShoeFilter setFilter={setFilter} />
        <ShoeList shoes={shoes} filter={filter} deleteShoe={deleteShoe} />
      </div>
    </Layout>
  );
};

export default App;
