import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCounter,
} from "../../feature/counter/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(selectCounter);
  const [incrementValue, setImmediateValue] = useState("");

  return (
    <div>
      <p>Counter:</p>
      <h2>{`counter is: ${counter}`}</h2>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <div style={{marginTop: "20px"}}>
        <input
          type="text"
          value={incrementValue}
          onChange={(e) => setImmediateValue(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(+incrementValue))}>
          incrementByAmount
        </button>
      </div>
    </div>
  );
};

export default Counter;
