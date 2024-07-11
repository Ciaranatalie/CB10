// import styles './App.module.css';
import Button from './components/button/Button';
import IconCart from './components/icons/iconCart';
import Counter from './components/counter/Counter';
import ShowBox from './components/showbox/Showbox';

function App() {

  return (
    <>
      <h1>Hello World</h1>
      <Button text={"Add to cart"}>
        <IconCart fill="#000"/>
      </Button>
      <Counter/>
      <ShowBox imgUrl={"./src/assets/images/image-product-1.jpg"}/>
    </>
  )
};
export default App;
