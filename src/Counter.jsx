import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    if (count < 10) setCount((prev) => prev + 1);
  };
  const decrementHandler = () => {
    if (count <= 10 && count > 0) setCount((prev) => prev - 1);
  };
  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
}

export default Counter;
