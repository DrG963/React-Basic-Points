import React, { useState, useEffect } from 'react';
import './App.css';
import { transactions } from './generateData';

export function basicPointsMath(amount) {
  let points = 0;
  // In the problem it says *over 100 and *over 50. So I can assume the range is 50.01 - 100.00 for 1 point each and 100.01 for 2 points each dollar? 
  // Also it says for every dollar, so I can assume we will round down decimal amounts regardless of if its closer to the next dollar? 
  if (amount > 100) {
      points = Math.floor(amount) * 2;
  } 
  if (amount > 50 && amount <= 100) {
      points = Math.floor(amount);
  }
  return points;
}

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
};

export function generatePointsDataHTML(data){
  return data.map(transaction => (
      <div key={transaction.id} className="transaction">
          <p className='categoryLabels'>Name: </p><span className="nameText">{transaction.customer}</span>
          <p className='categoryLabels'>Date: </p><span className="dateText">{formatDate(transaction.date)}</span>
          <p className='categoryLabels'>Amount: </p><span className="amountText">${transaction.amount.toFixed(2)}</span>
          <p className='categoryLabels'>Points: </p><span className="pointsText">{basicPointsMath(transaction.amount)}</span>
      </div>
  ));
}

export function simulateAsync(){
  return setTimeout(() => {
    generatePointsDataHTML(transactions);
  }, 1500)
}

// definitely had to look up how to do this properly, the simulate async thing was a little confusing to me, setTimeout made the most sense, I suppose?

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
      const timer = setTimeout(() => {
          setData(transactions);
      }, 1500);
      return () => clearTimeout(timer);
  }, []);

  return (
      <div className="App">
          <header className="App-header">
              <h1>Assignment Submission</h1>
              <div className="transactions">
                  {generatePointsDataHTML(data)}
              </div>
          </header>
      </div>
  );
}

export default App;
