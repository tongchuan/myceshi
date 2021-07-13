import React, { useState, useEffect } from 'react';
// import Navigation from '../components/Navigation';

function Product() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    setCount((prevCount) => (prevCount + 1));
  }, []);
  return (
    <div>
      {/*
        <Navigation />
      */}
      Product
      {count}
    </div>
  );
}

export default Product;
