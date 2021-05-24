import React, { Component, useContext, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallerystate.css";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import Aos from "aos";
import { RootStoreContext } from "../../stores/rootStore";
import { IImage } from "../../models/image";
interface IProps {
  images: IImage[]
}
const GalleryState: React.FC<IProps> = ({ images }) => {

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
    slidesToScroll: 1,
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
        {console.log(images.length)}
        {images.map(image => (
          <div key={image.id} className="gallery1_img ">
            <img
              className="logo1img"
              src={"https://www.homeland.aveneur.com/Images" + image.imageLocation}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default observer(GalleryState);
