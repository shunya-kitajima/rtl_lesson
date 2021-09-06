import React from "react";
import { useCounter } from "./useCounter";

const CustomHooks = () => {
  const { count, increment, decrement, dobule, triple, reset } = useCounter(3);

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={dobule}>Dobule</button>
      <button onClick={triple}>Triple</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CustomHooks;
