import { useAppContext } from "./Navbar";

const UserContainer = () => {
  const { user, login, logout } = useAppContext();

  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello There, {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            logout
          </button>
        </>
      ) : (
        <>
          <button className="btn" onClick={login}>
            Login
          </button>
        </>
      )}
    </div>
  );
};

export default UserContainer;
