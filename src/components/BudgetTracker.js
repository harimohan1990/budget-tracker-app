// BudgetTracker.js
import React, { useState, useEffect } from 'react';

const BudgetTracker = () => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState('');

  const handleAddExpense = () => {
    if (newExpense.trim() !== '') {
      setExpenses([...expenses, { name: newExpense, amount: Math.random() * 100 }]);
      setNewExpense('');
    }
  };

  return (
    <div>
      <h2>Budget Tracker</h2>
      <p>Budget: ${budget}</p>
      <input
        type="number"
        placeholder="Enter Budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
      />
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>
            {expense.name}: ${expense.amount.toFixed(2)}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New Expense"
        value={newExpense}
        onChange={(e) => setNewExpense(e.target.value)}
      />
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default BudgetTracker;
