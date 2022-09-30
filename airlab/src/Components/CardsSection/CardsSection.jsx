import React from "react";
import "./cards.css";
const CardsSection = () => {
  return (
    <div className="cards_root">
      <div className="imageDiv_cardsSection">
        <h1>What is AirLab.One</h1>
        <p>Interoperable peer to peer digital twin supported ecosystem</p>
        <p>for laboratories.</p>
        <p style={{ paddingTop: "1.5rem" }}>
          Our mission is to enhance collaborative and decentralised
        </p>
        <p>lab-asset utilisation, resource management and training.</p>
      </div>
      <div className="cards_main_carsSection">
        <div className=" box_part1">
          <div className="box1 box"></div>
          <div className="box2 box"></div>
        </div>
        <div className=" box_part2">
          <div className="box3 box"></div>
          <div className="box4 box"></div>
        </div>
      </div>
    </div>
  );
};

export default CardsSection;
