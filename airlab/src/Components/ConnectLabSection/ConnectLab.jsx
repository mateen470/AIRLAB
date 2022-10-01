import React from "react";
import "./connectlab.css";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
} from "react-scroll-motion";
const ConnectLab = () => {
  return (
    <>
      <div className="connectYourLab_root"></div>
      {/* <ScrollContainer>
        <ScrollPage> */}
          {/* <Animator animation={FadeIn()}> */}
            <h1 className="connectLab_h1">Connect You Lab</h1>
          {/* </Animator> */}
        {/* </ScrollPage>
      </ScrollContainer> */}
    </>
  );
};

export default ConnectLab;
