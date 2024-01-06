import React from "react";
import { useState } from "react";

const Practice = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = [
      {
        name: name,
        email: email,
        password: password,
      },
    ];
    const userExists = users.find((item) => item.name === newUser.name);
    if (userExists == -1) {
      return;
    }
    setUsers([...users, newUser]);
    console.log(users);
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="container">
        <form className="form" onSubmit={handleSubmit}>
          <h3>Login</h3>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-block">submit</button>
        </form>
      </div>
    </>
  );
};

export default Practice;
