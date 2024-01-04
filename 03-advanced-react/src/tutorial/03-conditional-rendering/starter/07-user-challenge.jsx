import { useState } from "react";

const UserChallenge = () => {
  const [user, updateUser] = useState(null);

  return (
    <>
      <h2>user challenge</h2>
      {user ? (
        <div>
          <h4>hello there, user {user.name}</h4>
          <button className="btn" onClick={() => updateUser(null)}>
            logout
          </button>
        </div>
      ) : (
        <div>
          <h4>please login</h4>
          <button
            className="btn"
            onClick={() => updateUser({ name: "charles" })}
          >
            login
          </button>
        </div>
      )}
    </>
  );
};

export default UserChallenge;
