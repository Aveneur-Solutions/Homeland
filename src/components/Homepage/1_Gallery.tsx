import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css";

export default class Gallery extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 3900,
      arrows: true,
    };
    return (
      <div className="slider">
        <Slider {...settings} className="slideroverflowcontrol">
          <div className="gallery_img ">
            <div className="centerbangla">
              <div className="shelf">
                <div className="door left">
                  <div className="door1 left"></div>
                  <div className="door1 left"></div>
                </div>
                <div className="door right"></div>
                <div className="elements">
                  <div className="toprow">
                    <div className="element y1">
                      <h1>সবুজের</h1>
                    </div>
                    <div className="element yy2">
                      <h1>মাঝে</h1>
                    </div>
                  </div>
                  <div className="toprow">
                    <div className="element">
                      <h1>জীবন</h1>
                    </div>
                    <div className="element xx2">
                      <h1>আনন্দ</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/images/h1.jpg"}
              alt=""
            />
          </div>
          <div className="gallery_img">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/images/h2.jpg"}
              alt=""
            />
          </div>
          <div className="gallery_img">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/images/h3.jpg"}
              alt=""
            />
          </div>
          <div className="gallery_img">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/images/h4.jpg"}
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
