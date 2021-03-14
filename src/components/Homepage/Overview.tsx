import { observer } from "mobx-react-lite";
import React from "react";
import "./Overview.css";
const Overview = () => {
  return (
    <div className="yell">
      <div className="overviewheading">
        <h1>HOMELAND GAZIPUR</h1>
      </div>
      <div className="overviewpara">
        <p>
          Homeland believes aspiring in one's own home and living in happiness
          of family bonding should not be constrained by financial disparity and
          social class constrains and is committed to create comfortable homes
          in utmost affordability.
        </p>
      </div>
      <div>
        <img
          className="overviewimg"
          src={process.env.PUBLIC_URL + "/images/overview.jpg"}
          alt="Homeland-topview"
        />
      </div>
    </div>
  );
};

export default observer(Overview);
