import React from "react";
import "./howwork.css";
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
const HowItWorkSection = () => {
  return (
    <div className="howItWorks_root_div">
      <div className="first_half_howItWork">
        <div className="textPart_firtsHalf">
          <h1>How it Works</h1>
          <p>
            Helvetica Light is an easy-to-read font, with tall and narrow
            letters, that works well on almost every site.
          </p>
        </div>
        <div className="imagePart_firstHalf">
          <div className="imgePart">
            <img src={work3} alt="#" />
            <img src={work2} alt="#" />
            <img src={work1} alt="#" />
          </div>

          <div className="textPart_firstHalf">
            <div className="textPart">
              <span>Decentralised</span>
              <span>Social Trust</span>
              <span>Reward Mechanism</span>
            </div>
          </div>
        </div>
      </div>
      <div className="second_half_howItWork">
        <div className="second_half_box_main">
          <div className="secondHalf_box1 box_secondHalf"></div>
          <div className="secondHalf_box2 box_secondHalf"></div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorkSection;
