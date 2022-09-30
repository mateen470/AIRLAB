import React from "react";
import { NavLink } from "react-router-dom";
import "./footer.css";
import logo from "./assets/logo.jpeg";
const Footer = () => {
  return (
    <div className="footer_root">
      <div className="footer_firstHalf">
        <div className="footer_firstHalf_imagePart">
          <img src={logo} alt="#" />
          <span>+61 2 8052 3988</span>
          <span>
            <NavLink>contact@airlabone.com</NavLink>
          </span>
          <span>
            Sydney Knowledge Hub Merewether Building H04 <br />
            Level 2 NSW 2006 Australia
          </span>
        </div>
        <div className="footer_firstHalf_ListPart">
          <ul>
            <li>
              <NavLink to="/">About</NavLink>
            </li>
            <li>
              <NavLink to="/" style={{ paddingRight: "150px" }}>
                Invest in AirLab.One
              </NavLink>
            </li>
            <li>
              <NavLink to="/">Litepaper</NavLink>
            </li>
            <li>
              <NavLink to="/">dApp</NavLink>
            </li>
            <li>
              <NavLink to="/">News</NavLink>
            </li>

            <button className="footer_btn">Get Started</button>
          </ul>
        </div>
      </div>
      <div className="footer_secondHalf">
        <span>Follow Us On:</span>
        <div className="social_media_main">
          <div className="social_media">
            {/* <img src={""} alt="#" /> */}
          </div>

          <div className="social_media">
            {/* <img src={""} alt="#" /> */}
          </div>

          <div className="social_media">
            {/* <img src={""} alt="#" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
