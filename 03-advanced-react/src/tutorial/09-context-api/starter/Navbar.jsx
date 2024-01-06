// import { createContext, useState } from "react";
// import NavLinks from "./NavLinks";
// import { useContext } from "react";

// export const NavbarContext = createContext();

// // custom hook
// export const useAppContext = () => useContext(NavbarContext);

// const Navbar = () => {
//   const [user, setUser] = useState("");
//   const logout = () => {
//     setUser(null);
//   };
//   const login = () => {
//     setUser({ name: "bob" });
//   };

//   return (
//     <NavbarContext.Provider value={{ user, logout }}>
//       <nav className="navbar">
//         <h5>CONTEXT API</h5>
//         <NavLinks />
//       </nav>
//     </NavbarContext.Provider>
//   );
// };

// export default Navbar;

import React, { createContext, useState, useContext } from "react";
import NavLinks from "./NavLinks";

export const NavbarContext = createContext();

// Custom hook
export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState("");

  const logout = () => {
    setUser(null);
  };

  const login = () => {
    setUser({ name: "bob" });
  };

  return (
    <NavbarContext.Provider value={{ user, login, logout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
