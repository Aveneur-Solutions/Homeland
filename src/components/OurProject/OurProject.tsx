import ProjectGallery from "./ProjectGallery";
import { Grid } from "semantic-ui-react";
import Cards from "./Card";
import FilterCard from "./FilterCard";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { RootStoreContext } from "../../stores/rootStore";
import UnitList from "./UnitList";

const OurProject = () => {
  const rootStore = useContext(RootStoreContext);
  const { featured, setUnitSearch, searchUnit } = rootStore.navStore;
  return (
    <>
      <ProjectGallery />
      <Grid className="projectbg">
        <Grid.Column width={3}>
          <FilterCard />
          <div className="projectbottom buttondiv1">
            <button className="nextbutton1" onClick={() => setUnitSearch()}>
              Search
            </button>
          </div>
        </Grid.Column>
        <Grid.Column width={13}>
          {featured && <Cards />}
          {searchUnit && <UnitList />}
        </Grid.Column>
      </Grid>
    </>
  );
};

export default observer(OurProject);
