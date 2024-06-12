import { useState } from 'react';

export const useCounter = (intialValue = 0) => {
  const [counter, setCounter] = useState(intialValue);

  const increment = () => {
    setCounter((counter) => counter + 1);
  };

  const decrement = () => {
    setCounter((counter) => counter - 1);
  };

  const reset = () => {
    setCounter(intialValue);
  };

  return {
    counter,
    increment,
    decrement,
    reset,
  };
};
