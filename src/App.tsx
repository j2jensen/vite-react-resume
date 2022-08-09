import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>James K Jensen</h1>
      <div className="card">
        <p>Playing with Vite, React, StackBlitz, and Github.</p>
      </div>
    </div>
  );
}

export default App;
