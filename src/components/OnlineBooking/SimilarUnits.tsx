/* eslint-disable jsx-a11y/alt-text */
import { observer } from "mobx-react-lite";
import { Card, Grid } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
import IFlat from "../../models/unit";

interface IProps {
  unit: IFlat;
}

const SimilarUnits: React.FC<IProps> = ({ unit }) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <div>
      {!isTabletOrMobileDevice ? (
        <div className="pccentercard">
          <div className="similarcards">
            <Card fluid>
              <img
                className="cardimg"
                src={
                  "https://www.homeland.aveneur.com/Images" +
                  unit.images[unit.images.length - 1].imageLocation
                }
                // wrapped
                // ui={false}
              />
              <Card.Content>
                <Grid columns={3}>
                  <Grid.Row>
                    <Grid.Column>
                      <Card.Header className="cardtoprow  ">
                        Unit ID<h4 className="cardtoplabel">{unit.id}</h4>
                      </Card.Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Header className="cardtoprow ">
                        Size<h4 className="cardtoplabel">{unit.size}</h4>
                        sqft.
                      </Card.Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Header className="cardtoprow ">
                        Price<h4 className="cardtoplabel">{unit.price}</h4>
                        Tk
                      </Card.Header>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column>
                      <Card.Meta>
                        <span className="cardbottomrow">
                          Building: {unit.buildingNumber}
                        </span>
                      </Card.Meta>
                      <Card.Meta>
                        <span className="cardbottomrow">
                          Level: {unit.level}
                        </span>
                      </Card.Meta>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Meta>
                        <span className="cardbottomrow">
                          Net Area: {unit.netArea}
                        </span>
                      </Card.Meta>
                      <Card.Meta>
                        <span className="cardbottomrow">
                          Common Area: {unit.commonArea}
                        </span>
                      </Card.Meta>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card>
          </div>
        </div>
      ) : (
        <div className="mobilecentercard">
          <div className="cardsizeformob1">
            <Card fluid>
              <img
                // className="cardhover"
                src={
                  "https://www.homeland.aveneur.com/Images" +
                  unit.images[unit.images.length - 1].imageLocation
                }
                // wrapped
                // ui={false}
              />
              <Card.Content>
                <Grid columns={3} divided>
                  <Grid.Row>
                    <Grid.Column>
                      <Card.Header className="cardtoprow  ">
                        Unit ID<h4 className="cardtoplabel">{unit.id}</h4>
                      </Card.Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Header className="cardtoprow ">
                        Size<h4 className="cardtoplabel">{unit.size}</h4>
                        sqft.
                      </Card.Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Header className="cardtoprow ">
                        Price<h4 className="cardtoplabel">{unit.price}</h4>
                        Tk
                      </Card.Header>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column>
                      <Card.Meta>
                        <span className="cardbottomrow">
                          Building: {unit.buildingNumber}
                        </span>
                      </Card.Meta>
                      <Card.Meta>
                        <span className="cardbottomrow">
                          Level: {unit.level}
                        </span>
                      </Card.Meta>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Meta>
                        <span className="cardbottomrow">
                          Net Area: {unit.netArea}
                        </span>
                      </Card.Meta>
                      <Card.Meta>
                        <span className="cardbottomrow">
                          Common Area: {unit.commonArea}
                        </span>
                      </Card.Meta>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default observer(SimilarUnits);
