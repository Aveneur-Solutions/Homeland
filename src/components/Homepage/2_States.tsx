import React, { useContext } from "react";
import { Menu, Sticky, } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { observer } from "mobx-react-lite";
import HomeStore from "./HomeStore";
import Overview from "./Overview";
import Location from "./Location";
import "./home.css"
import GalleryState from "./Gallery";

const States = () => {

  const store = useContext(HomeStore);
  const { setOverviewVisibility, setLocationVisibility, setGalleryVisibility, showGallery, showOverview, showLocation} = store;


  return (
    <div>
      <Sticky>
      <Menu pointing
      className="ponting">
        <Menu.Item
          name="Overview"
          active={showOverview}
          onClick= {()=> setOverviewVisibility()}
          className = "overview navfont"
        />
        <Menu.Item
          name="Location"
          active={showLocation}
          onClick= {()=> setLocationVisibility()}
          className = "navfont"
        />
        <Menu.Item
          name="Gallery"
          active={showGallery}
          onClick= {()=> setGalleryVisibility()}
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
