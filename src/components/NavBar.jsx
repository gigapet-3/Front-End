import React from "react";
import { NavLink } from "react-router-dom";

import "./styles/NavBar.css";

// https://getbootstrap.com/docs/4.4/components/navbar/
// example
const NavBar = props => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="/dashboard">
          LambdiPet
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#gigapetNavbarToggler"
          aria-controls="gigapetNavbarToggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="gigapetNavbarToggler">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link text-right" to="/login">
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-right" to="/register">
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-right" to="/testcard">
                testing
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
