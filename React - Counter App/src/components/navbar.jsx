import React from "react";

// Stateless Functional Component (sfc like imrc)
const NavBar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badge-pill secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
