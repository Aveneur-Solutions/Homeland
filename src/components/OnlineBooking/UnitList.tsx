/* eslint-disable jsx-a11y/alt-text */
import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Button, Card, Image, Grid } from "semantic-ui-react";
import IFlat from "../../models/unit";
import { useMediaQuery } from "react-responsive";
import { ChangeEvent, useContext } from "react";
import { RootStoreContext } from "../../stores/rootStore";
import { history } from "../..";

interface IProps {
  sortedFlats: IFlat[];
}
const UnitList: React.FC<IProps> = ({ sortedFlats }) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  const rootStore = useContext(RootStoreContext);
  const { selectedFlats, selectFlats, unselectFlats } = rootStore.flatStore;

  const checkboxHandler = (e: ChangeEvent<HTMLInputElement>, flat: IFlat) => {
    const { checked } = e.currentTarget;
    if (checked) selectFlats(flat);
    else unselectFlats(flat);
  };

  const handleCardClick = (flat: IFlat) => {
    selectFlats(flat);
    history.push("/maininfo");
  };

  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="cardcontainer">
          <Grid columns={2} divided>
            {sortedFlats.map((item) => (
              <div
                className="cardhover"
                key={item.id}
                // onClick={() => handleCardClick(item)}
              >
                <Card fluid>
                  <img
                    src={
                      "https://www.homeland.aveneur.com/Images" +
                      item.images[item.images.length - 1].imageLocation
                    }
                    height="400px"
                  />
                  <Card.Content>
                    <Grid columns={3} divided>
                      <Grid.Row>
                        <Grid.Column>
                          <Card.Header className="cardtoprow  ">
                            Unit ID<h4 className="cardtoplabel">{item.id}</h4>
                          </Card.Header>
                        </Grid.Column>
                        <Grid.Column>
                          <Card.Header className="cardtoprow ">
                            Size<h4 className="cardtoplabel">{item.size}</h4>
                            sqft.
                          </Card.Header>
                        </Grid.Column>
                        <Grid.Column>
                          <Card.Header className="cardtoprow ">
                            Price<h4 className="cardtoplabel">{item.price}</h4>
                            Tk
                          </Card.Header>
                        </Grid.Column>
                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column>
                          <Card.Meta>
                            <span className="cardbottomrow">
                              Building: {item.buildingNumber}
                            </span>
                          </Card.Meta>
                          <Card.Meta>
                            <span className="cardbottomrow">
                              Level: {item.level}
                            </span>
                          </Card.Meta>
                        </Grid.Column>
                        <Grid.Column>
                          <Card.Meta>
                            <span className="cardbottomrow">
                              Net Area: {item.netArea}
                            </span>
                          </Card.Meta>
                          <Card.Meta>
                            <span className="cardbottomrow">
                              Common Area: {item.commonArea}
                            </span>
                          </Card.Meta>
                        </Grid.Column>
                        <Grid.Column>
                          <Card.Header className="cardtoprow">
                            <input
                              type="checkbox"
                              className="searched-unit-checkbox"
                              name={item.id}
                              value={item.id}
                              onChange={(e) => checkboxHandler(e, item)}
                            />
                            <label htmlFor={item.id}></label>
                          </Card.Header>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              </div>
            ))}
          </Grid>
          <div className="projectbottom buttondiv">
            <Link to="./mainInfo">
              <Button
                className="nextbutton"
                style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                disabled={selectedFlats.length === 0}
              >
                Next
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="tbl">
          {sortedFlats.map((item) => (
            <Card fluid key={item.id}>
              <Image
                src={
                  "https://www.homeland.aveneur.com/Images" +
                  item.images[item.images.length - 1].imageLocation
                }
                wrapped
                ui={false}
              />
              <Card.Content>
                <Grid columns={3} divided>
                  <Grid.Row>
                    <Grid.Column>
                      <Card.Header className="cardtoprow  ">
                        Unit ID<h4 className="cardtoplabel">{item.id}</h4>
                      </Card.Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Header className="cardtoprow ">
                        Size<h4 className="cardtoplabel">{item.size}</h4>
                        sqft.
                      </Card.Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Header className="cardtoprow ">
                        Price<h4 className="cardtoplabel">{item.price}</h4>
                        Tk
                      </Card.Header>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column>
                      <Card.Meta>
                        <span className="cardbottomrow">
                          Building: {item.buildingNumber}
                        </span>
                      </Card.Meta>
                      <Card.Meta>
                        <span className="cardbottomrow">
                          Level: {item.level}
                        </span>
                      </Card.Meta>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Meta>
                        <span className="cardbottomrow">
                          Net Area: {item.netArea}
                        </span>
                      </Card.Meta>
                      <Card.Meta>
                        <span className="cardbottomrow">
                          Common Area: {item.commonArea}
                        </span>
                      </Card.Meta>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Header className="cardtoprow">
                        <input
                          type="checkbox"
                          className="searched-unit-checkbox"
                          name={item.id}
                          value={item.id}
                          onChange={(e) => checkboxHandler(e, item)}
                        />
                        <label htmlFor={item.id}></label>
                      </Card.Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card>
          ))}
          <div className="projectbottom buttondiv">
            <Link to="./mainInfo">
              <Button
                className="nextbutton"
                style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                disabled={selectedFlats.length === 0}
              >
                Next
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default observer(UnitList);
