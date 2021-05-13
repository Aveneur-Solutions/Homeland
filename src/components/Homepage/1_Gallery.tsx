import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css";

const Gallery = () => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    fade: true,
    
    pauseOnHover: false

  };

    return (
      <>
      
      <div className="slider">
        <div className="slideroverflowcontrol">
        <Slider {...settings}>
        <div className="gallery_img ">
            <div className="centerbangla">
              <div className="shelf">
                <div className="door left">
                  <div className="door1 "></div>
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
          <div className="gallery_img ">
            <div className="centerbangla">
              <div className="shelf">
                <div className="door left">
                  <div className="door1 "></div>
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
              src={process.env.PUBLIC_URL + "/images/o2.jpg"}
              alt=""
            />
          </div>
          <div className="gallery_img ">
            <div className="centerbangla">
              <div className="shelf">
                <div className="door left">
                  <div className="door1 "></div>
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
              src={process.env.PUBLIC_URL + "/images/o3.jpg"}
              alt=""
            />
          </div>
        </Slider>
          
        </div>
      </div>
      </>
    );
  }
  export default Gallery
