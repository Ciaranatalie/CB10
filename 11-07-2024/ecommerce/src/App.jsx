// import styles './App.module.css';
import Button from './components/button/Button';
import IconCart from './components/icons/iconCart';
import Counter from './components/counter/Counter';
import IconPlus from './components/icons/IconPlus';
import IconMinus from './components/icons/IconMinus';

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <Button text={"Add to cart"}>
        <IconCart fill="#000"/>
      </Button>
      <Counter></Counter>
    </>
  )
};
export default App;
