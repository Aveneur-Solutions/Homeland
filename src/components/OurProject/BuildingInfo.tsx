import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./building.css";
import { Grid, GridColumn } from "semantic-ui-react";

export default class BuildingInfo extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };
    return (
      <div className="slider">
        <Slider {...settings} className="slideroverflowcontrol">
          <div className="gallery_img ">
            <div className="buildingsize">
              <Grid columns={2}>
                <GridColumn width={10}>
                    <div className="imagebox">
                        
                    </div>
                </GridColumn >
                <Grid.Column width={2} >
                    <div className="detailbox">
                        
                        </div>
                </Grid.Column >
              </Grid>
            </div>
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
