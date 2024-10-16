import React from 'react';
import './ExpenseItem.css';

function ExpenseItem(props) {
  return (
    <li className="expense-item">
      <div>{props.date.toDateString()}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </li>
  );
}

export default ExpenseItem;
