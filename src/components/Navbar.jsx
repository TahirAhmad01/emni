import React from "react";
import { Link } from "react-router-dom";
import logo from "../assests/svg/cute_si_2nd_curv.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/profile">profile</Link>
          </li>
          <li>
            <Link to="/dasboard">dashboard</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
          <li>
            <Link to="/login">login</Link>
          </li>
        </ul>
      </div>

      <div className="mobile-menu">
        <div className="three-menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
