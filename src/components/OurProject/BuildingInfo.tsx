import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./building.css";
import BuildingSlider from "./BuildingSlider";

export default class BuildingInfo extends Component {
  render() {
    const settings1 = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };
    return (
      <div className="slider1">
        <Slider {...settings1} className="slideroverflowcontrol">
          <div>
            <BuildingSlider/>
          </div>
          <div>
            <BuildingSlider/>
          </div>
          <div>
            <BuildingSlider/>
          </div>
        </Slider>
      </div>
    );
  }
}
