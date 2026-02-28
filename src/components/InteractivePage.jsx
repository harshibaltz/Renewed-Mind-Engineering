import React, { useState } from 'react';

function InteractivePage() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const showMessage = () => {
    setMessage('Hello! You clicked the button! 🎉');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="interactive">
      <h2>Interactive Playground</h2>
      <p>Click the buttons and see what happens!</p>

      <div className="counter">
        <h3>Counter: {count}</h3>
        <button onClick={increment}>➕ Increment</button>
        <button onClick={decrement}>➖ Decrement</button>
        <button onClick={reset}>🔄 Reset</button>
      </div>

      <div className="message-box">
        <button onClick={showMessage}>Show Message</button>
        {message && <p className="flash-message">{message}</p>}
      </div>
    </div>
  );
}

export default InteractivePage;