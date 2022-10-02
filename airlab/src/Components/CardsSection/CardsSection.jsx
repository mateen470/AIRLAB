import React from "react";
import "./cards.css";
import cloud from "./assets/cloud.png";
import fourblock from "./assets/fourblocks.png";
import runningblock from "./assets/runningblock.png";
import user from "./assets/user.png";
import { useParallax } from "react-scroll-parallax";
const CardsSection = () => {
  // const { ref } = useParallax({
  //   easing: "easeOutQuad",
  //   translateX: [-4.5, 5],
  // });
  return (
    <div className="cards_root">
      <div className="imageDiv_cardsSection">
        <div>
          <h1>What is AirLab.One</h1>
          <p>
            Interoperable peer to peer digital twin supported ecosystemfor
            laboratories.
          </p>
          <p style={{ paddingTop: "1rem" }}>
            Our mission is to enhance collaborative and decentralised lab-asset
            utilisation, resource management and training.
          </p>
        </div>
      </div>
      <div className="cards_main_carsSection">
        <div className=" box_part1">
          <div className="box1 box">
            <img src={cloud} alt="#" className="box_img" />
            <span className="box_h1">Decentralised</span>
            <div className="box_span">
              <span>
                Collaborate remotely and in real-time with users anywhere,
                anytime.
              </span>
            </div>
          </div>
          <div className="box2 box">
            <img src={fourblock} alt="#" className="box_img" />
            <span className="box_h1">Digital Twins</span>
            <div className="box_span">
              <span>
                Upskill your staff and students remotely and quicker on digital
                instruments
              </span>
            </div>
          </div>
        </div>
        <div className=" box_part2">
          <div className="box3 box">
            <img src={runningblock} alt="#" className="box_img" />
            <span className="box_h1">Data Acceleration</span>
            <div className="box_span">
              <span>
                Share your devices and data with full ownership andtransparency
              </span>
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
