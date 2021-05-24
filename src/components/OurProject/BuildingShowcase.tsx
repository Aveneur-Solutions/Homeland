import React from "react";
import { Card, Image } from "semantic-ui-react";
import ListUnits from "./ListUnits";

const BuildingShowcase = () => {
  return (
    <div className="building3">
      <div className="projCardContainer">
        <Card fluid>
          <Image
            src={process.env.PUBLIC_URL + "/images/h2.jpg"}
            fluid
            ui={false}
          />
          <Card.Content>
            <Card.Header>Building 1</Card.Header>
            <Card.Meta>
              <span className="date">Available 4</span>
              <span className="date">Booked 4</span>
            </Card.Meta>
            <Card.Description>
              This South facing house provides good breeze.
            </Card.Description>
          </Card.Content>
        </Card>
        <div className="unitscroll">
          <ListUnits />
        </div>
      </div>
    </div>
  );
};

export default BuildingShowcase;
