import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../Homepage/gallery.css";
// import { ReactVideo } from "reactjs-media";
// import Video from "./Toup.mp4";

export default class Gallery_2 extends Component {
  render() {
    return (
      <div className="vdoheight">
          {/* <ReactVideo 
          src={Video}
          className="vdosize"
          autoPlay={true}
          primaryColor="goldenrod"
          poster={process.env.PUBLIC_URL + "/images/poster.jpg"}
         
          /> */}
      </div>
    );
  }
}
