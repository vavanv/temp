import React from "react";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div className="page page1">
      <div className="flagTop" />
      <div className="flagCenter">
        <h1 className="country>">Argentina (PAGE1)</h1>
        <div className="otherLinks">
          <Link to="/page2">Nigeria</Link>
        </div>
      </div>
      <div className="flagBottom"></div>
    </div>
  );
};

export default Page1;
