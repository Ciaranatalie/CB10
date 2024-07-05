import React from 'react';
import './ResultsDisplay.css';

const ResultsDisplay = ({ results }) => (
  <div className="results-display">
    <h2>Your Results</h2>
    {results ? (
      <>
        <p>Your monthly repayments: <strong>£{results.monthlyRepayment.toFixed(2)}</strong></p>
        <p>Total you'll repay over the term: <strong>£{results.totalRepayment.toFixed(2)}</strong></p>
      </>
    ) : (
      <p>Fill out the form and click "Calculate Repayments" to see the results.</p>
    )}
  </div>
);

export default ResultsDisplay;
