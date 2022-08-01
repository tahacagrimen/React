import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/counter/counterSlice";

function Counter() {
  const [amount, setAmount] = useState(0);
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{countValue}</h1>
      <button onClick={() => dispatch(increment())}>Arttır</button>
      <button onClick={() => dispatch(decrement())}>Azalt</button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Verilen Miktar Kadar Arttır
      </button>
    </div>
  );
}

export default Counter;
