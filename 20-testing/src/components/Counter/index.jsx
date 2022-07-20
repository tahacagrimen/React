import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <br />
      <br />
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Arttir</button>
      <button onClick={() => setCount(count - 1)}>Azalt</button>
    </div>
  );
}

export default Counter;
