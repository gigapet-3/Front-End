import React from "react";
import { NavLink, useHistory } from "react-router-dom";

import "./styles/NavBar.css";

// https://getbootstrap.com/docs/4.4/components/navbar/

export const navlistItem = (pathTo, targetName, idx) => (
  <li key={idx} className="nav-item">
    <NavLink className="nav-link text-right" to={pathTo}>
      {targetName}
    </NavLink>
  </li>
);

// export const initialListItems = [
//   { url: "/login", text: "Login" },
//   { url: "/register", text: "Register" }
// ];

const NavBar = props => {
  const { menuItems } = props;
  // const [lItems] = useState(menuItems);
  const history = useHistory();
  const handleBrandClick = e => {
    e.preventDefault();
    history.push("/dashboard");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a
          className="navbar-brand"
          onClick={handleBrandClick}
          href="/dashboard"
        >
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
            {menuItems.map((x, idx) => navlistItem(x.url, x.text, idx))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
