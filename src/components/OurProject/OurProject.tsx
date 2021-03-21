import React from "react";
import Gallery_2 from "../OurStory/2_Gallery";
import { Grid, Image } from "semantic-ui-react";
import Cards from "./Card";
import FilterCard from "./FilterCard";
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

const OurProject = () => {
  return (
    <>
      <Gallery_2 />
      <Grid className="projectbg">
        <Grid.Column width={3}>
          <FilterCard />
        </Grid.Column>
        <Grid.Column width={13}>
          <Cards />
        </Grid.Column>
      <div className="projectbottom buttondiv"><Link to="./unitlist">
          <button className="nextbutton">Next</button>
        </Link></div>
      </Grid>
    </>
  );
};

export default observer(OurProject);
