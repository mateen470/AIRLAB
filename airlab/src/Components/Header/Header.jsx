import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./head.css";
import logo from "./assets/logo.jpeg";
import ham from "./assets/hame.png";
import cross from "./assets/cross.png";
const Header = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const toggle = () => {
    setBurgerMenuOpen(!burgerMenuOpen);
  };
  return (
    <div className="header_root">
      <div>
        <div className="imge_header">
          <img src={logo} />
        </div>
        <div className="navigation_header">
          <ul>
            <li>
              <NavLink to={"/"} className="oe">
                About
              </NavLink>
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
      <div className="burger_menu">
        <button onClick={toggle} className="burgerBtn">
          <img src={burgerMenuOpen ? cross : ham} alt="" />
        </button>
        <div
          className="navigation_header_burger"
          style={{
            display: burgerMenuOpen ? "block" : "none",
          }}
        >
          <ul>
            <li>
              <NavLink to={"/"} id="header_about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} id="op">
                Invest in AirLab.One
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} id="header_litepaper">
                Litepaper
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} id="header_dapp">
                dApp
              </NavLink>
            </li>
            <li>
              <NavLink to={"/"} id="header_news">
                News
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
