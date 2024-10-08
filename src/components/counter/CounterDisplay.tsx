// CounterDisplay.tsx

import React, { useContext } from 'react';
import { CounterContext } from '../../context/CounterContext';

// Create a component that consumes the context
export const CounterDisplay: React.FC = () => {
  // Access the context value using the useContext hook
  const counterContext = useContext(CounterContext);

  // If context is undefined, throw an error (this can happen if the component is not wrapped in the provider)
  if (!counterContext) {
    throw new Error('CounterDisplay must be used within a CounterProvider');
  }

  const { count, increment } = counterContext;

  return (
    <div>
      <p>Current Count: {count}</p>
      {/* When the button is clicked, call the increment function from the context */}
      <button onClick={increment}>Increment</button>
    </div>
  );
};
