import React from "react";
import "./last.css";
import imageCard1 from "./assets/imageCard1.webp";
import imageCard2 from "./assets/imageCard2.webp";
import imageCard3 from "./assets/imageCard3.webp";
import imageCard4 from "./assets/imageCard4.webp";
import partner1 from "./assets/partner1.webp";
import partner2 from "./assets/partner2.webp";
import partner3 from "./assets/partner3.webp";
import partner4 from "./assets/partner4.webp";
const Last = () => {
  return (
    <div className="lastSection_root">
      <div className="mainText_part">
        <div className="mainHeading">
          <h1>
            We Integrate With your <br />
          </h1>
          <h1 style={{ marginTop: "-2rem" }}>Ecosystem</h1>
        </div>
        <div className="mainParaghraph">
          <p>
            This is your Services section. This is a great place to give more
            information about the services you provide. You can write a general
            description of what your business offers then add more details
            below.
          </p>
          <p>
            This section can be adapted for your website. You may choose to
            highlight other things like courses or programs, or to share special
            features about your business that you want to promote. Double click
            on the text box to edit the text and make it your own.{" "}
          </p>
        </div>
      </div>
      <div className="imageCardsPart">
        <div className="imageCard_main">
          <img src={imageCard1} alt="#" />
          <div className="contentPart_imageCard">
            <h5>Diagnostics</h5>
            <p>Describe one of your services</p>
          </div>
        </div>
        <div className="imageCard_main">
          <img src={imageCard2} alt="#" />
          <div className="contentPart_imageCard">
            <h5>Clinical Trials</h5>
            <p>Describe one of your services</p>
          </div>
        </div>
        <div className="imageCard_main">
          <img src={imageCard3} alt="#" />
          <div className="contentPart_imageCard">
            <h5>Pharmaceuticals</h5>
            <p>Describe one of your services</p>
          </div>
        </div>
        <div className="imageCard_main">
          <img src={imageCard4} alt="#" />
          <div className="contentPart_imageCard">
            <h5>Auditing</h5>
            <p>Describe one of your services</p>
          </div>
        </div>
      </div>
      <div className="partnersPart">
        <h2>Our Partners</h2>
        <img src={partner1} alt="#" />
        <img src={partner2} alt="#" />
        <img src={partner3} alt="#" />
        <img src={partner4} alt="#" />
      </div>
    </div>
  );
};

export default Last;
