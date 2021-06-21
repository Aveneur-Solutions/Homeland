import React, { useContext } from "react";
import { Card, Image } from "semantic-ui-react";
import ListUnits from "./ListUnits";
import { useMediaQuery } from "react-responsive";
import { RootStoreContext } from "../../stores/rootStore";
import { observer } from "mobx-react-lite";

const BuildingShowcase = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const rootStore = useContext(RootStoreContext);
  const { currentBuilding } = rootStore.projectStore;
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="building3">
          <div className="projCardContainer">
            <Card fluid>
              <Image
                    src={"https://www.homeland.aveneur.com/Images" + currentBuilding?.image}
                    size="small"
                    centered
              />
              <Card.Content>
                <Card.Header>Building {currentBuilding?.buildingNumber}</Card.Header>
                <Card.Meta>
                  <span className="date">Available {currentBuilding?.flats.filter(x => !x.isBooked && !x.isSold).length}</span>
                  <span className="date">Booked {currentBuilding?.flats.filter(x => x.isBooked).length}</span>
                </Card.Meta>
              </Card.Content>
            </Card>
            <div className="unitscroll">
              <ListUnits units={currentBuilding?.flats!}/>
            </div>
          </div>
        </div>
      ) : (        
        <div className="building3m">
          <div className="projCardContainerm">
            <Card fluid>
              <Image
                   src={"https://www.homeland.aveneur.com/Images" + currentBuilding?.image}
                fluid
                ui={false}
              />
              <Card.Content>
                <Card.Header>Building {currentBuilding?.buildingNumber}</Card.Header>
                <Card.Meta>
                <span className="date">Available {currentBuilding?.flats.filter(x => !x.isBooked && !x.isSold).length}</span>
                  <span className="date">Booked {currentBuilding?.flats.filter(x => x.isBooked).length}</span>
                </Card.Meta>
              </Card.Content>
            </Card>
            <div className="unitscrollm">
              <ListUnits units={currentBuilding?.flats!}/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default observer(BuildingShowcase) ;
