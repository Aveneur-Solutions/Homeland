import ProjectGallery from "./ProjectGallery";
import { Grid } from "semantic-ui-react";
import Card from "./Card";
import FilterCard from "./FilterCard";
import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { RootStoreContext } from "../../stores/rootStore";
import UnitList from "./UnitList";

const OurProject = () => {
  const rootStore = useContext(RootStoreContext);
  const { featured, setUnitSearch, searchUnit } = rootStore.navStore;
  const { featuredFlats, listfeatured } = rootStore.flatStore;

  useEffect(() => {
    listfeatured();
  }, [listfeatured]);

  return (
    <>
      <ProjectGallery />
      <div className="projectbg">
      <Grid >
        <Grid.Column width={3}>
          <FilterCard />
          <div className="projectbottom buttondiv1">
            <button className="nextbutton1" onClick={setUnitSearch}>
              Search
            </button>
          </div>
        </Grid.Column>
        <Grid.Column width={13}>
          {featured && <Card featuredFlats={featuredFlats} />}
          {searchUnit && <UnitList />}
        </Grid.Column>
      </Grid>
      </div>
      
    </>
  );
};

export default observer(OurProject);
