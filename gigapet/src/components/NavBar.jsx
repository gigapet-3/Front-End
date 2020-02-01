import React from "react";
import { NavLink } from "react-router-dom";

import "./styles/NavBar.css";

const NavBar = props => {
  return (
    <nav>
      <NavLink to="/">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </nav>
  );
};

export default NavBar;
