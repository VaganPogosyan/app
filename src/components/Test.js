import React, { useEffect } from 'react';

const Test = () => {
  useEffect(() => {
    console.log('hey');
  }, []);

  return <h1>Test</h1>;
};

export default Test;
