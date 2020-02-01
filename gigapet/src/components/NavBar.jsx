import React from "react";
import { NavLink } from "react-router-dom";

import "./styles/NavBar.css";

// https://getbootstrap.com/docs/4.4/components/navbar/#placement

const NavBar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo03"
        aria-controls="navbarTogglerDemo03"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <a className="navbar-brand" href="#">
        gigapet
      </a>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <NavLink to="/">Login</NavLink>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <NavLink to="/register">Register</NavLink>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
