import logo from './logo.svg';
import './App.css';

import BudgetTracker from './components/BudgetTracker';
import GoalSetter from './components/GoalSetter';

function App() {
  return (
    <div className="App">
           <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <BudgetTracker />
        <GoalSetter />
        {/* Add other components here */}
      </div>

    </div>
  );
}

export default App;
