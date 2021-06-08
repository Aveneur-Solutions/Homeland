import { observer } from "mobx-react-lite";
import { Card, Image, Grid } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";

const SimilarUnits = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <div>
      {!isTabletOrMobileDevice ? (
          <div className="pccentercard">
            <div className="similarcards">
              <Card fluid>
                <Image
                  // className="cardhover"
                  src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Grid columns={3}>
                    <Grid.Row>
                      <Grid.Column>
                        <Card.Header className="cardtoprow  ">
                          Unit ID<h4 className="cardtoplabel">1</h4>
                        </Card.Header>
                      </Grid.Column>
                      <Grid.Column>
                        <Card.Header className="cardtoprow ">
                          Size<h4 className="cardtoplabel">1</h4>
                          sqft.
                        </Card.Header>
                      </Grid.Column>
                      <Grid.Column>
                        <Card.Header className="cardtoprow ">
                          Price<h4 className="cardtoplabel">1</h4>
                          Tk
                        </Card.Header>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column>
                        <Card.Meta>
                          <span className="cardbottomrow">Building: 1</span>
                        </Card.Meta>
                        <Card.Meta>
                          <span className="cardbottomrow">Level: 1</span>
                        </Card.Meta>
                      </Grid.Column>
                      <Grid.Column>
                        <Card.Meta>
                          <span className="cardbottomrow">Net Area: 1</span>
                        </Card.Meta>
                        <Card.Meta>
                          <span className="cardbottomrow">Common Area: 1</span>
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
              <Image
                // className="cardhover"
                src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
                wrapped
                ui={false}
              />
              <Card.Content>
                <Grid columns={3} divided>
                  <Grid.Row>
                    <Grid.Column>
                      <Card.Header className="cardtoprow  ">
                        Unit ID<h4 className="cardtoplabel">1</h4>
                      </Card.Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Header className="cardtoprow ">
                        Size<h4 className="cardtoplabel">1</h4>
                        sqft.
                      </Card.Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Header className="cardtoprow ">
                        Price<h4 className="cardtoplabel">1</h4>
                        Tk
                      </Card.Header>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column>
                      <Card.Meta>
                        <span className="cardbottomrow">Building: 1</span>
                      </Card.Meta>
                      <Card.Meta>
                        <span className="cardbottomrow">Level: 1</span>
                      </Card.Meta>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Meta>
                        <span className="cardbottomrow">Net Area: 1</span>
                      </Card.Meta>
                      <Card.Meta>
                        <span className="cardbottomrow">Common Area: 1</span>
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
