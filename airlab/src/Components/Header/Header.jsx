import React from "react";
import { NavLink } from "react-router-dom";

import "./head.css";
import logo from "./assets/logo.jpeg";
const Header = () => {
  return (
    <div className="header_root">
      <div>
        <div className="imge_header">
          <img src={logo} />
        </div>
        <div className="navigation_header">
          <ul>
            <li>
              <NavLink to={"/"} className="oe">About</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Invest in AirLab.One</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Litepaper</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>dApp</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>News</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
