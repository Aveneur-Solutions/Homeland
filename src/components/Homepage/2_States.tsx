import { useContext, useEffect } from "react";
import { Menu } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { observer } from "mobx-react-lite";
import Overview from "./Overview";
import Location from "./Location";
import "./home.css"
import GalleryState from "./Gallery";
import { RootStoreContext } from "../../stores/rootStore";

const States = () => {

  const store = useContext(RootStoreContext);
  const { setOverviewVisibility, setLocationVisibility, setGalleryVisibility, showGallery, showOverview, showLocation} = store.commonStore;
 
  const { listAllImages, galleryImages } = store.commonStore;
  useEffect(() => {
    listAllImages()
  }, [listAllImages])

  return (
    <div>
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
          {showOverview && <Overview/>}
          {showLocation && <Location/>}
          {showGallery && <GalleryState images={galleryImages}/>}
    </div>
  );
};
export default observer(States);
