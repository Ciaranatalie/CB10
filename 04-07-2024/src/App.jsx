import React, { useState } from 'react';
import Header from './components/Header';
import CalculatorForm from './components/CalculatorForm';
import ResultsDisplay from './components/ResultsDisplay';
import './App.css';

const App = () => {
  const [results, setResults] = useState(null);

  const calculateRepayments = ({ amount, term, rate, type }) => {
    const principal = parseFloat(amount);
    const interestRate = parseFloat(rate) / 100 / 12;
    const numberOfPayments = parseInt(term) * 12;

    let monthlyRepayment = 0;
    if (type === 'repayment') {
      monthlyRepayment = (principal * interestRate) / (1 - Math.pow(1 + interestRate, -numberOfPayments));
    } else {
      monthlyRepayment = principal * interestRate;
    }

    const totalRepayment = monthlyRepayment * numberOfPayments;

    setResults({
      monthlyRepayment,
      totalRepayment,
    });
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <CalculatorForm onCalculate={calculateRepayments} />
        <ResultsDisplay results={results} />
      </main>
    </div>
  );
};

export default App;
