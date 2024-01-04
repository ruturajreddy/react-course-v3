import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    const someFunc = () => {
      // some logic
    };
    window.addEventListener("scroll", someFunc);
  }, []);
  return <h1>hello there</h1>;
};

export default CleanupFunction;
