// CounterContext.tsx

import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of the context data
interface CounterContextType {
  count: number;          // The current count value
  increment: () => void;  // Function to increment the count
}

// Create the context with an initial undefined value
export const CounterContext = createContext<CounterContextType | undefined>(undefined);

// Define the props for the CounterProvider component
interface CounterProviderProps {
  children: ReactNode; // The child components that will have access to this context
}

// Create a provider component
export const CounterProvider: React.FC<CounterProviderProps> = ({ children }) => {
  // State to hold the current count value
  const [count, setCount] = useState<number>(0);

  // Function to increment the count
  const increment = () => setCount((prevCount) => prevCount + 1);

  // The value that will be supplied to any descendants of this component
  const contextValue: CounterContextType = {
    count,
    increment,
  };

  // Return the provider component with the context value
  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};
