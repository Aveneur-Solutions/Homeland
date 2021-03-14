import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallery.css";

export default class GalleryState extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      arrows: true,
    };
    return (
      <div className="slider slider1">
        <Slider {...settings}>
          <div className="gallery1_img ">
            <img
              className="logo1img"
              src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
              alt=""
            />
          </div>
          <div className="gallery1_img">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
              alt=""
            />
          </div>
          <div className="gallery1_img">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
              alt=""
            />
          </div>
          <div className="gallery1_img">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
              alt=""
            />
          </div>
          <div className="gallery1_img">
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
