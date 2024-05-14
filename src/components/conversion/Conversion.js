import React from "react";
import "./conversion.css";

const Conversion = ({ text }) => {
  return (
    <div className="conversion-root">
      <p className="conversion-text">{text}</p>
    </div>
  );
}

export default Conversion;