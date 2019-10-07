import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = {
    fontWeight: "bold",
    textDecoration: "underline"
  };
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={'fab fa-github'}></i> <NavLink exact to="/">Github User Finder</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink exact to="/" activeStyle={linkStyle}>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle={linkStyle}>
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
