import React from "react";
import { Link } from "react-router-dom";

const Page2 = () => {
  return (
    <div className="page page2">
      <div className="flagTop" />
      <div className="flagCenter">
        <h1 className="country>">Nigeria (PAGE2)</h1>
        <div className="otherLinks">
          <Link to="/page1">Argentina</Link>
        </div>
      </div>
      <div className="flagBottom"></div>
    </div>
  );
};

export default Page2;
