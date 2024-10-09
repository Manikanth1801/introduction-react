


import React, { useEffect } from 'react';

const OnMount: React.FC = () => {
  useEffect(() => {
    console.log('OnMount component mounted');
  }, []); // Empty dependency array

  return <h1>Welcome to My Portfolio</h1>;
};

export default OnMount;
