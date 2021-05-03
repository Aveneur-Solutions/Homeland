/* eslint-disable react/jsx-pascal-case */
import React, { Component } from "react";
import Gallery_2 from "./2_Gallery";
import "./ourStory.css";
import { ourStory } from "./storyInfo";
import SvgComponent1 from "./logosvg1";
import Aos from "aos"
import { useEffect } from 'react'
import "aos/dist/aos.css"


const OurStory = () => {
  useEffect(() => {
    Aos.init({duration: 50000})
  }, [])
    return (
      <>
        <div className="main-story">
          <div className="our-story">
            {ourStory.map((story, index) => {
              return (
                <div className="our-story-content" key={index}>
                  <h2>{story.title}</h2>
                  <h4 style={{ width: "20vw" }}>{story.para}</h4>
                </div>
              );
            })}
          </div>
          <Gallery_2 />
        </div>
        <div className="logoContainer">

        <div className="main-logo" data-aos="zoom-in">
          <SvgComponent1 />
        </div>
        </div>
      </>
    );
}

export default OurStory;
