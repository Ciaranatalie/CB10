import React, { useState } from 'react';
import './CalculatorForm.css';

const CalculatorForm = ({ onCalculate }) => {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');
  const [rate, setRate] = useState('');
  const [type, setType] = useState('repayment');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount && term && rate) {
      onCalculate({ amount, term, rate, type });
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <form className="calculator-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Mortgage Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="£"
        />
      </div>
      <div className="form-group">
        <label>Mortgage Term</label>
        <input
          type="number"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="years"
        />
      </div>
      <div className="form-group">
        <label>Interest Rate</label>
        <input
          type="number"
          step="0.01"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          placeholder="%"
        />
      </div>
      <div className="form-group">
        <label>Mortgage Type</label>
        <div className="radio-group">
          <label>
            <input
              type="radio"
              value="repayment"
              checked={type === 'repayment'}
              onChange={(e) => setType(e.target.value)}
            />
            Repayment
          </label>
          <label>
            <input
              type="radio"
              value="interestOnly"
              checked={type === 'interestOnly'}
              onChange={(e) => setType(e.target.value)}
            />
            Interest Only
          </label>
        </div>
      </div>
      <button className="calculate-button" type="submit">Calculate Repayments</button>
    </form>
  );
};

export default CalculatorForm;
