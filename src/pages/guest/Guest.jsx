import React from "react";
import "./guest.css";

export default function Guest() {
  return (
    <div className="guest">
      <div className="guestHeadContainer">
        <h2 className="guestHead">Edit Guest</h2>
        <button className="guestAddBtn">Create</button>
      </div>
      <div className="guestContainer">
        <div className="guestShow"></div>
        <div className="guestUpdate"></div>
      </div>
    </div>
  );
}
