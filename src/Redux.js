import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCount,
  increment,
  decrement,
  incrementByAmount,
} from "./features/customCounter/customCounterSlice";

const Redux = () => {
  const [number, setNumber] = useState(0);
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Redux Integration Test</h3>
      <diV>
        <button onClick={() => dispatch(increment())}>+</button>
        <span testid="count-value">{count}</span>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(number | 0))}>
          IncrementByAmount
        </button>
        <input
          type="text"
          placeholder="Enter"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </diV>
    </div>
  );
};

export default Redux;
