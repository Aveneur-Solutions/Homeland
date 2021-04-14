import ProjectGallery from "./ProjectGallery"
import { Grid } from "semantic-ui-react";
import Cards from "./Card";
import FilterCard from "./FilterCard";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const OurProject = () => {
  return (
    <>
      <ProjectGallery />
      <Grid className="projectbg">
        <Grid.Column width={3}>
          <FilterCard />
          <div className="projectbottom buttondiv1">
            <Link to="./unitlist">
              <button className="nextbutton1">Search</button>
            </Link>
          </div>
        </Grid.Column>
        <Grid.Column width={13}>
          <Cards />
        </Grid.Column>
      </Grid>
    </>
  );
};

export default observer(OurProject);
