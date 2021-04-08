import React from "react";
import { Label } from "semantic-ui-react";

const BuildingSlider = () => {
  return (
    <div>
      <div className="gallery_img ">
        <div className="maincontainer">
          <div className="textcontainer">
            <div className="textshere">
              <Label image>
                <img src="/images/icons/bed.png" alt="" />3 BEDS
              </Label>
              <Label image>
                <img src="/images/icons/bath.png" alt="" />2 BATHS
              </Label>
              <Label image>
                <img src="/images/icons/balcony.png" alt="" />1 BALCONY
              </Label>
              <Label image>
                <img src="/images/icons/level.png" alt="" />
                Level 1
              </Label>
              <Label image>
                <img src="/images/icons/netarea.png" alt="" />
                Net Area: 764 sft
              </Label>
              <div className="okay">
                <div className="okay"></div>
              </div>
              <div className="okay"></div>
            </div>

            <div className="imagecontainer">
              <img
                className="logoimg"
                src={process.env.PUBLIC_URL + "/images/4.jpg"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="gallery_img ">
        <div className="maincontainer">
          <div className="textcontainer">
            <div className="textshere">
              <Label image>
                <img src="/images/icons/bed.png" alt="" />3 BEDS
              </Label>
              <Label image>
                <img src="/images/icons/bath.png" alt="" />2 BATHS
              </Label>
              <Label image>
                <img src="/images/icons/balcony.png" alt="" />1 BALCONY
              </Label>
              <Label image>
                <img src="/images/icons/level.png" alt="" />
                Level 1
              </Label>
              <Label image>
                <img src="/images/icons/netarea.png" alt="" />
                Net Area: 764 sft
              </Label>
              <div className="okay">
                <div className="okay"></div>
              </div>
              <div className="okay"></div>
            </div>

            <div className="imagecontainer">
              <img
                className="logoimg"
                src={process.env.PUBLIC_URL + "/images/4.jpg"}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingSlider;
