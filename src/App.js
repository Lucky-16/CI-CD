import React, { useState } from 'react';
import './App.css';
import Button from './components/Button';

function App() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div className="app-container">
      <h1>Welcome to the React Frontend App</h1>
      <p>Developed with React and CI/CD Pipeline</p>
      <Button onClick={handleClick} text="Click me" />
      <p className="click-count">Button click count: {clickCount}</p>
    </div>
  );
}

export default App;
