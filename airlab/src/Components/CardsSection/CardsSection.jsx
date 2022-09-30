import React from "react";
import "./cards.css";
import cloud from "./assets/cloud.png";
import fourblock from "./assets/fourblocks.png";
import runningblock from "./assets/runningblock.png";
import user from "./assets/user.png";
const CardsSection = () => {
  return (
    <div className="cards_root">
      <div className="imageDiv_cardsSection">
        <h1>What is AirLab.One</h1>
        <p>Interoperable peer to peer digital twin supported ecosystem</p>
        <p>for laboratories.</p>
        <p style={{ paddingTop: "1rem" }}>
          Our mission is to enhance collaborative and decentralised
        </p>
        <p>lab-asset utilisation, resource management and training.</p>
      </div>
      <div className="cards_main_carsSection">
        <div className=" box_part1">
          <div className="box1 box">
            <img src={cloud} alt="#" className="box_img" />
            <span className="box_h1">Decentralised</span>
            <div className="box_span">
              <span style={{ marginLeft: "0.1rem" }}>
                Collaborate remotely and <br />
              </span>
              <span style={{ marginLeft: "0.65rem" }}>
                in real-time with users <br />
              </span>
              <span style={{ marginLeft: "1.2rem" }}>anywhere, anytime.</span>
            </div>
          </div>
          <div className="box2 box">
            <img src={fourblock} alt="#" className="box_img" />
            <span className="box_h1">Digital Twins</span>
            <div className="box_span">
              <span style={{ marginLeft: "-0.65rem" }}>
                Upskill your staff and students <br />
              </span>
              <span style={{ marginLeft: "0.3rem" }}>
                {" "}
                remotely and quicker on <br />
              </span>
              <span style={{ marginLeft: "1.3rem" }}>digital instruments</span>
            </div>
          </div>
        </div>
        <div className=" box_part2">
          <div className="box3 box">
            <img src={runningblock} alt="#" className="box_img" />
            <span className="box_h1">Data Acceleration</span>
            <div className="box_span">
              <span style={{ marginLeft: "-0.65rem" }}>
                Share your devices and data <br />
              </span>
              <span style={{ marginLeft: "0.3rem" }}>
                {" "}
                with full ownership and .<br />
              </span>
              <span style={{ marginLeft: "2.2rem" }}>transparency</span>
            </div>
          </div>
          <div className="box4 box">
            <img src={user} alt="#" className="box_img" />
            <span className="box_h1">Crowd Wisdom</span>
            <div className="box_span">
              <span>Increase your Lab visibility.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
