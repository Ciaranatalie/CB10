// import styles './App.module.css';
import React from 'react';
import Button from './components/button/Button.jsx';
import IconCart from "./components/icons/iconCart.jsx"
import Counter from './components/counter/Counter.jsx';
import ProductLightBox from "./components/productLightBox/productLightBox.jsx"

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <Button text={"Add to cart"}>
        <IconCart fill="#000"/>
      </Button>
      <Counter/>
      <ProductLightBox />
    </>
  );
}
export default App;
