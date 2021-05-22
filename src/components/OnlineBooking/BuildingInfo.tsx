import { Component, useContext, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./building.css";
import BuildingSlider from "./BuildingSlider";
import { RootStoreContext } from "../../stores/rootStore";

const BuildingInfo = () => {
  const settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const rootStore = useContext(RootStoreContext);
  const { selectedFlats, clearSelectedFlats, addToCart } = rootStore.flatStore;

  useEffect(() => {
    return () => {
      clearSelectedFlats();
    };
  }, [clearSelectedFlats]);

  return (
    <>
      <div className="slider1">
        <Slider {...settings1} className="slideroverflowcontrol">
          {selectedFlats.map((flat) => (
            <div key={flat.id}>
              <BuildingSlider flat={flat} action={addToCart} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default BuildingInfo;
