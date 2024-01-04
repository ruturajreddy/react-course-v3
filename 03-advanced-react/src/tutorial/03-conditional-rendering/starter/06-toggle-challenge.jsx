import { useState } from "react";

const ToggleChallenge = () => {
  const [currentState, updateState] = useState(false);

  return (
    <>
      <h2>toggle challenge</h2>
      {currentState && <Alert />}
      <button className="btn" onClick={() => updateState(!currentState)}>
        {currentState ? "remove" : "add"}
      </button>
    </>
  );
};

const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};

export default ToggleChallenge;
