import React, { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return console.log("enter name");
    const fakeId = Date.now();
    const newUser = { id: fakeId, name: name };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    setName("");
  };

  const removeUser = (id) => {
    const updatedUsers = users.filter((item) => item.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>users</h2>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h4>{user.name}</h4>
            <button className="btn" onClick={() => removeUser(user.id)}>
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};
export default UserChallenge;
