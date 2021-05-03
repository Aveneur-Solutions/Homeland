import React, { Component } from "react";
import Slider from "react-slick";
import "./ourStory.css";
export default class Storytexts extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,autoplaySpeed: 6000,
      arrows: false,
      fade: true,
    };
    return (
      <div className="storySlider">
        <Slider {...settings}>
          <div className="our-story-mob">
            <div className="our-story-content-mob">
              <div className="text-wrapper1">
                <h2 className="">We believe</h2>
              </div>
              <div className="text-wrapper1">
                <h4 className="">Togetherness is happiness</h4>
              </div>
            </div>
          </div>

          <div className="our-story-mob">
            <div className="our-story-content-mob">
              <div className="text-wrapper1">
                <h2 className="">We Will</h2>
              </div>
              <div className="text-wrapper1">
                <h4 className="">
                  Operate business profitably. Bring happiness among all who
                  comes to be associated with our work. Deliver homes to new
                  market segments.
                </h4>
              </div>
            </div>
          </div>

          <div className="our-story-mob">
            <div className="our-story-content-mob">
              <div className="text-wrapper1">
                <h2 className="">We Must</h2>
              </div>
              <div className="text-wrapper1">
                <h4 className="">
                Have faith. Strive to do the best. Be sincere
                </h4>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
