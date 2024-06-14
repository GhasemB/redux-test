import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, selectNumber } from "../../feature/number/numberSlice";

const Number = () => {
  const dispatch = useDispatch();
  const number = useSelector(selectNumber);
  const [incrementValue, setImmediateValue] = useState("");

  return (
    <div>
      <p>Number:</p>
      <h2>{`number is: ${number}`}</h2>
      <button onClick={() => dispatch(increment())}>incrementNumber</button>
      <button onClick={() => dispatch(decrement())}>decrementNumber</button>
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

export default Number;
