import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  const increCount = () => {
    setCount(count + 1);
  };
  return (
    <>
      <h2>Use states example</h2>
      <h2>{count}</h2>
      <button className="btn" onClick={increCount}>
        increment
      </button>
    </>
  );
};

export default UseStateBasics;
