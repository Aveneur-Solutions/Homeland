import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallerystate.css";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Aos from "aos";

const GalleryState = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,

      slidesToScroll: 2,
      speed: 500,
      autoplay: true,
      arrows: true,
      responsive: [
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            autoplay: true,
            centerMode: true,
          },
        },
      ],
    };
    return (
      
      <div className="slider" data-aos="fade-up">
        <Slider {...settings}
        className="slider2">
          <div className="gallery1_img ">
            {/* <Popup
              trigger={
                <img
                  className="logo1img"
                  src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                  alt=""
                />
              }
            >
             
            </Popup> */}
            <img
                  className="logo1img"
                  src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                  alt=""
                />
          </div>
          <div className="gallery1_img ">
            {/* <Popup
              trigger={
                <img
                  className="logo1img"
                  src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                  alt=""
                />
              }
            >
              <img
                className="logo2img"
                src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                alt=""
              />
            </Popup> */}
            <img
                  className="logo1img"
                  src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                  alt=""
                />
          </div>
          <div className="gallery1_img ">
            {/* <Popup
              trigger={
                <img
                  className="logo1img"
                  src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                  alt=""
                />
              }
              position="right center"
            >
              <img
                className="logo2img"
                src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                alt=""
              />
            </Popup> */}
            <img
                  className="logo1img"
                  src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                  alt=""
                />
          </div>
          <div className="gallery1_img ">
            {/* <Popup
              trigger={
                <img
                  className="logo1img"
                  src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                  alt=""
                />
              }
              position="right center"
            >
              <img
                className="logo2img"
                src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                alt=""
              />
            </Popup> */}
            <img
                  className="logo1img"
                  src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                  alt=""
                />
          </div>
          <div className="gallery1_img ">
            {/* <Popup
              trigger={
                <img
                  className="logo1img"
                  src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                  alt=""
                />
              }
              position="right center"
            >
              <img
                className="logo2img"
                src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                alt=""
              />
            </Popup> */}
            <img
                  className="logo1img"
                  src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                  alt=""
                />
          </div>
        </Slider>
      </div>
    );
};

export default observer(GalleryState);
