import { useState } from "react";

const ShortCircuitOverview = () => {
  // falsy
  const [text, setText] = useState("");

  // truthy
  const [name, setName] = useState("Susan");

  return (
    <>
      <h2>{name || "No name"}</h2>
      <button className="btn">{name ? "remove" : "add"}</button>
    </>
  );
};
export default ShortCircuitOverview;
