import React, { useState, useEffect } from 'react';
// import Navigation from '../components/Navigation';

function Test() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((prevCount) => (prevCount + 1));
  }, []);

  
  return (
    <div>
      Product
      {count}
    </div>
  );
}

export default Test;
