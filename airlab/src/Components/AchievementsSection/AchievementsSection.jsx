import React from "react";
import "./achieve.css";
import ConnectLab from "../ConnectLabSection/ConnectLab";
const AchievementsSection = () => {
  return (
    <div className="achieve_root">
      <div className="text_achieve_main">
        <h1>Join Global Network of Labs</h1>
        <p>
          Welcome visitors to your site with a short, engaging introduction.
        </p>
        <p>Double click to edit and add your own text.</p>
      </div>
      <div className="achiev_cards_main">
        <div className="achieve_card">
          <h1 className="acheive_h1">15</h1>
          <p className="achive_p">Years of Experience</p>
        </div>
        <div className="achieve_card">
          <h1 className="acheive_h1">10K</h1>
          <p className="achive_p">Business Partners</p>
        </div>
        <div className="achieve_card">
          <h1 className="acheive_h1">25M</h1>
          <p className="achive_p">Products Installed</p>
        </div>
        <div className="achieve_card">
          <h1 className="acheive_h1">22</h1>
          <p className="achive_p">Countries World Wide</p>
        </div>
        <div className="achieve_card">
          <h1 className="acheive_h1">5</h1>
          <p className="achive_p">Industry Awards</p>
        </div>
      </div>
      <div className="connectYourLab_main_div">
        <ConnectLab />
      </div>
    </div>
  );
};

export default AchievementsSection;
