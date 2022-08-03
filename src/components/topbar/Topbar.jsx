import React from "react";
import "./topbar.css";
import { IoIosNotifications } from "react-icons/io";

import VorgezLogo from "../../assets/images/vorgez-logo.png";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbar__wrapper">
        <div className="topbar__left">
          <img
            className="vorgez-logo"
            src={VorgezLogo}
            alt="vorgez-logo"
            loading="lazy"
            width="100"
          />
        </div>
        <div className="topbar__right">
          <div className="icons__container">
            <IoIosNotifications className="notify" />
            <span className="badge">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
