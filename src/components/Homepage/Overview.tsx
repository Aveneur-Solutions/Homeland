import { observer } from "mobx-react-lite";
import "./Overview.css";
import Aos from "aos";
import { useEffect } from "react";
const Overview = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="yell" data-aos="fade-up">
      <div className="overviewheading" >
        <h1 >HOMELAND GAZIPUR</h1>
      </div>
      <div className="overviewpara">
        <p>
          Homeland believes aspiring in one's own home and living in happiness
          of family bonding should not be constrained by financial disparity and
          social class constrains and is committed to create comfortable homes
          in utmost affordability.
        </p>
      </div>
      <div className="fontsonly">
        <div className="fontss font1">
          <i className="iconsize fontss fas fa-building"></i>
          <p>Affordable</p>
        </div>
        <div className="fontss">
            <i className=" iconsize fontss fas fa-hand-holding-usd"></i>
          <p>Safe Investment</p>
        </div>
        <div className="fontss">
          <i className="iconsize fontss fab fa-envira"></i>
          <p>Green Environment</p>
        </div>
      </div>
      <div>
        <img
          className="overviewimg"
          src={process.env.PUBLIC_URL + "/images/overview.webp"}
          alt="Homeland-topview"
        />
      </div>
    </div>
  );
};

export default observer(Overview);
