import React from "react";
import "./Newcard.css";
const Newcard = ({ items }) => {
  const { category, title, image, description } = items;
  return (
    <div className="main-newcard">
      <div className="main-newcard-first">My Details</div>
      <div className="first-detail">{category}</div>
      <div className="second-detail">{title}</div>
      <div className="third-detail">
        <img src={image} alt="imgs" />
      </div>
      <div className="fourth-detail">{description}</div>
      {/* <div className="fifth-detail">Rate:{rating.rate}</div> */}
    </div>
  );
};

export default Newcard;
