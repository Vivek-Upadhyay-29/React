import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  multiply,
  incrementByamount
} from "./counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={dispatch(incrementByamount(5))}>incrementByamount 5</button>
      <button onClick={dispatch(multiply())}>Multiply</button>
    </div>
  );
}

export default Counter;
