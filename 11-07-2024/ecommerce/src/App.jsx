// import styles './App.module.css';
import Button from './components/button/Button';
import IconCart from './components/icons/iconCart';

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <Button text={"Add to cart"}>
        <IconCart fill="#000"></IconCart>
          </Button>;
    </>
  )
};
export default App;
