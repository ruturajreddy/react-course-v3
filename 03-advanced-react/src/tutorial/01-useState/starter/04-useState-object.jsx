import { useState } from "react";

const UseStateObject = () => {
  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [hobby, setHobby] = useState("reading books");

  const displayPerson = () => {
    setName("John");
    setAge(26);
    setHobby("golf");
  };

  return (
    <>
      <h2>{name}</h2>
      <h2>{age}</h2>
      <h2>{hobby}</h2>
      <button className="btn" onClick={displayPerson}>
        show John
      </button>
    </>
  );
};

export default UseStateObject;
