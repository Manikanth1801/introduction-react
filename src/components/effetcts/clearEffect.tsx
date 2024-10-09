import React, { useEffect } from 'react'

const clearEffect = () => {
    useEffect(() => {
        const timer = setInterval(() => {
          console.log('Tick');
        }, 1000);
      
        // Cleanup function
        return () => {
          clearInterval(timer);
        };
      }, []);
      
      
  return (
    <div>clearEffect</div>
  )
}

export default clearEffect