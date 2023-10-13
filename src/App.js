import React, { useState, useEffect } from 'react';
import './App.css';
import { transactions } from './generateData';

export function basicPointsMath(amount) {
  let points = 0;
  // I am assuming the customers still get the 50 points in the 100+ dollar range from the 50-100 range.
  if (amount > 100) {
      points = ((Math.floor(amount) - 100) * 2) + 50;
  } 
  if (amount > 50 && amount <= 100) {
      points = Math.floor(amount) - 50;
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
