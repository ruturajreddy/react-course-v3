import { useState } from "react";

const UseStateGotcha = () => {
  const [value, setValue] = useState(0);

  const setState = (prevState) => {
    return { ...prevState, value: newValue };
  };

  return (
    <>
      <h2>useState "gotcha"</h2>
      <h2>{value}</h2>
      <button
        className="btn"
        onClick={() => {
          setValue((currentState) => {
            const newState = currentState + 1;
            console.log(newState);
            return newState;
          });
        }}
      >
        increment
      </button>
    </>
  );
};

export default UseStateGotcha;
