import React from "react";
import { Card, Image } from "semantic-ui-react";
import ListUnits from "./ListUnits";
import { useMediaQuery } from "react-responsive";

const BuildingShowcase = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <>
      {!isTabletOrMobileDevice ? (
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
      ) : (
        
        // MOBILE VIEW CODE STARTS FROM BELOW
        <div className="building3m">
          <div className="projCardContainerm">
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
            <div className="unitscrollm">
              <ListUnits />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BuildingShowcase;
