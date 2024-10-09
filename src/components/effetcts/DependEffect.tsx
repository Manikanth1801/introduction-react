import React, { useEffect, useState } from 'react'

const DependEffect = () => {
    const [count, setCount] = useState(0);

useEffect(() => {
  console.log(`Count changed: ${count}`);
}, [count]); // Runs when 'count' changes

  return (
    <div>DependEffect</div>
  )
}

export default DependEffect