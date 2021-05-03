/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import Gallery_2 from "./2_Gallery";
import "./ourStory.css";
import { ourStory } from "./storyInfo";
import SvgComponent1 from "./logosvg1";
import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import { useMediaQuery } from "react-responsive";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Storytexts from "./Storytexts";

const OurStory = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const settingsStory = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true
  };
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <>
          <div className="main-story">
            <div className="our-story">
              {ourStory.map((story, index) => {
                return (
                  <div
                    className="our-story-content"
                    key={index}
                    data-aos="fade-up"
                  >
                    <h2>{story.title}</h2>
                    <h4 style={{ width: "20vw" }}>{story.para}</h4>
                  </div>
                );
              })}
            </div>
            <div className="bgblack" data-aos="fade-left">
              <Gallery_2 />
            </div>
          </div>
          <div className="logoContainer">
            <div className="main-logo">
              <SvgComponent1 />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="main-story-mob">
            <div className="bgblack" data-aos="fade-down">
              <Gallery_2 />
            </div>
              <Storytexts/>
          </div>
          <div className="logoContainer">
            <div className="main-logo">
              <SvgComponent1 />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default OurStory;
