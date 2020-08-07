import React from "react";

import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";

import "./InfoBar.css";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftContainer">
        <img className="onlineIcon" src={onlineIcon} alt="Online" />
        <h3>{room}</h3>
      </div>
      <div className="rightContainer">
        <a href="/">
          <img className="closeIcon" src={closeIcon} alt="Close" />
        </a>
      </div>
     {/*  <div className='infoBar'>
        <img src={onlineIcon} alt="online" />
        <h3>ROOM</h3>
        <a href="/">
          <img src={closeIcon} alt="close" />
        </a>
      </div> */}
    </div>
  );
};

export default InfoBar;
