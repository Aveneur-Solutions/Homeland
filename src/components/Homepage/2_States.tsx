import React, { Component, useContext, useState } from "react";
import { Input, Menu, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { observer } from "mobx-react-lite";
import HomeStore from "./HomeStore";
import Overview from "./Overview";
import "./Overview.css"

const States = () => {
  const [activeItem, setActiveItem] = useState("");

  const store = useContext(HomeStore);
  const { setOverviewVisibility, setLocationVisibility, setGalleryVisibility, showOverview} = store;

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
      <Menu pointing>
        <Menu.Item
          name="Overview"
          active={activeItem === "Overview"}
          onClick= {()=> OverviewOnClick()}
          className = "overview"
        />
        <Menu.Item
          name="Location"
          active={activeItem === "Location"}
          onClick= {()=> LocationOnClick()}
        />
        <Menu.Item
          name="Gallery"
          active={activeItem === "Gallery"}
          onClick= {()=> GalleryOnClick()}
        />
      </Menu>

          {showOverview && <Overview/>}
    </div>
  );
};
export default observer(States);
