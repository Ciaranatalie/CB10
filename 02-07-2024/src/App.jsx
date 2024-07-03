import React from "react";
import Card from "./components/card/Card.jsx";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <AdviceCard />
    </div>
  );
};

export default App;