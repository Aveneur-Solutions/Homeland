import { Card, Image, Grid, Icon } from "semantic-ui-react";
import "./project.css";
import { observer } from "mobx-react-lite";
import IFlat from "../../models/unit";

interface IProps {
  featuredFlats: IFlat[]
}

const Cards: React.FC<IProps> = ({featuredFlats}) => {  
  return (
    <div className="cardcontainer">
      <h2>Featured Units</h2>
      <Grid columns={2} divided>
        {featuredFlats.map((item) => {
          return (
            <div className="cardsize " key={item.id}>
              <Card fluid>
                <Image
                  className="cardhover"
                  src={process.env.PUBLIC_URL + "/images/dummy/1.jpg"}
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
                          Size<h4 className="cardtoplabel">{item.size}</h4>sqft.
                        </Card.Header>
                      </Grid.Column>
                      <Grid.Column>
                        <Card.Header className="cardtoprow ">
                          Price<h4 className="cardtoplabel">{item.price}</h4>Tk
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
                    </Grid.Row>
                  </Grid>
                </Card.Content>
              </Card>
            </div>
          );
        })}
      </Grid>
    </div>
  );
};

export default observer(Cards);
