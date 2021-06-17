import { Grid } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import IFlat from "../../models/unit";
import React from "react";
import UnitCard from "./Card/UnitCard";

interface IProps {
  featuredFlats: IFlat[];
  header: string;
}

const Cards: React.FC<IProps> = ({ featuredFlats, header }) => {
  return (
    <div className="cardcontainer">
      <h2>{header}</h2>
      <Grid columns={3}>
        {featuredFlats.map((item) => (
          <UnitCard item={item} key={item.id} />
        ))}
      </Grid>
    </div>
  );
};

export default observer(Cards);
