import React from "react";
import "./card.scss";
const Card = ({ children, style, className = "" }) => {
  return (
    <div style={style} className={`pokeCard ${className}`}>
      <span className="dot1"></span>
      <span className="dot2"></span>
      <span className="dot3"></span>
      <span className="dot4"></span>
      <span className="dot5"></span>
      <span className="dot6"></span>
      <span className="dot7"></span>
      <span className="dot8"></span>
      <span className="dot9"></span>
      <span className="dot10"></span>
      <span className="dot11"></span>
      <span className="dot12"></span>
      <span className="dot13"></span>
      <span className="dot14"></span>
      <span className="dot15"></span>
      <span className="dot16"></span>
      <span className="dot17"></span>
      <span className="dot18"></span>
      <span className="dot19"></span>
      <span className="dot20"></span>
      <span className="dot21"></span>
      <span className="dot22"></span>
      <span className="dot23"></span>
      <span className="dot24"></span>
      {children}
    </div>
  );
};

export default Card;
