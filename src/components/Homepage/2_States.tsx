import React, { useContext, useState } from "react";
import { Menu, Sticky, } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { observer } from "mobx-react-lite";
import HomeStore from "./HomeStore";
import Overview from "./Overview";
import Location from "./Location";
import "./home.css"
import GalleryState from "./Gallery";

const States = () => {
  const [activeItem, setActiveItem] = useState("");

  const store = useContext(HomeStore);
  const { setOverviewVisibility, setLocationVisibility, setGalleryVisibility, showGallery, showOverview, showLocation} = store;

   const OverviewOnClick = () => {
    setActiveItem("Overview");
    setOverviewVisibility();
   }

   const LocationOnClick = () => {
    setActiveItem("Location");
    setLocationVisibility();
   }

   const GalleryOnClick = () => {
    setActiveItem("Gallery");
    setGalleryVisibility();
   }

  return (
    <div>
      <Sticky>
      <Menu pointing>
        <Menu.Item
          name="Overview"
          active={activeItem === "Overview"}
          onClick= {()=> OverviewOnClick()}
          className = "overview navfont"
        />
        <Menu.Item
          name="Location"
          active={activeItem === "Location"}
          onClick= {()=> LocationOnClick()}
          className = "navfont"
        />
        <Menu.Item
          name="Gallery"
          active={activeItem === "Gallery"}
          onClick= {()=> GalleryOnClick()}
          className = "navfont"
        />
      </Menu>
      </Sticky>
          {showOverview && <Overview/>}
          {showLocation && <Location/>}
          {showGallery && <GalleryState/>}
    </div>
  );
};
export default observer(States);
