// GoalSetter.js
import React, { useState } from 'react';

const GoalSetter = () => {
  const [goals, setGoals] = useState([]);
  const [newGoal, setNewGoal] = useState('');

  const handleAddGoal = () => {
    if (newGoal.trim() !== '') {
      setGoals([...goals, newGoal]);
      setNewGoal('');
    }
  };

  return (
    <div>
      <h2>Financial Goals</h2>
      <ul>
        {goals.map((goal, index) => (
          <li key={index}>{goal}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="New Goal"
        value={newGoal}
        onChange={(e) => setNewGoal(e.target.value)}
      />
      <button onClick={handleAddGoal}>Add Goal</button>
    </div>
  );
};

export default GoalSetter;
