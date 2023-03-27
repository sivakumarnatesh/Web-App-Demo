import React from "react";
import Tiles from "../../../src/assets/Videos/tiles.mp4";

const Player = () => {
  return (
    <div>
      <video
        width="100%"
        height="100%"
        
        muted
        autoPlay={"autoplay"}
        preLoad="auto"
        loop
      >
        <source src={Tiles} type="video/mp4" />
      </video>
    </div>
  );
};

export default Player;
