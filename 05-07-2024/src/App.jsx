import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <div>
          <h1>Mortgage Calc</h1>
          <form>
            <label>Mortgage Amount</label>
            <input name="mortgageAmount"></input>

            <label>Mortgage Term</label>
            <input></input>

            <label>Interest Rate</label>
            <input name="interestRate" type="text" onChange={}></input>

            <input></input>
            <input></input>
          </form>
        </div>
        <div>
          <h2>Your result</h2>
          <h3>Risultato</h3>
        </div>
      </div>
  );
}

export default App
