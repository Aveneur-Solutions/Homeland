import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Homepage/gallery.css";
import ReactPlayer from "react-player";
export default class Gallery_2 extends Component {
  render() {
    return (
      <div className="vdosize">
        <ReactPlayer
          className="vdosize"
          width="60vw"
          height="70vh"
          playing={true}
          playbackRate={.5}
          url="https://www.youtube.com/watch?v=-1AH7tF2IOI"
          // controls={true}
          modestbranding={true}
        />
      </div>
    );
  }
}
