import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Homepage/gallery.css";

export default class Gallery_2 extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="gallery_img ">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
              alt=""
            />
          </div>
          <div className="gallery_img">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
              alt=""
            />
          </div>
          <div className="gallery_img">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
              alt=""
            />
          </div>
          <div className="gallery_img">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
              alt=""
            />
          </div>
          <div className="gallery_img">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
              alt=""
            />
          </div>
        </Slider>
      </div>
    );
  }
}
