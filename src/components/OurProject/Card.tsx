import React, { useContext } from "react";
import ProjectStore from "./ProjectStore";
import { CardItems } from "./CardItems";
import { Card, Image, Grid, Icon } from "semantic-ui-react";
import "./project.css";
const CardMaker = () => {
  const store = useContext(ProjectStore);
  const {
    setPriceFilter,
    setSizeFilter,
    showCard,
    filterCardPrice,
    filterCardSize,
  } = store;
};
const Cards = () => {
  const cardItem = CardItems.sort();
  return (
    <div className="cardcontainer">
      <h2>Featured Units</h2>

      <Grid columns={2} divided>
        {CardItems.map((item, index) => {
          return (
            <div className="cardsize">
              <Card fluid key={index}>
                <Image
                  className="cardhover"
                  src={process.env.PUBLIC_URL + item.image}
                  wrapped
                  ui={false}
                />
                <Card.Content>
                  <Grid columns={3} divided>
                    <Grid.Row>
                      <Grid.Column>
                        <Card.Header className="cardtoprow ">
                          Unit ID<h4 className="cardtoplabel">{item.unit}</h4>
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
                            Building: {item.buildingnum}
                          </span>
                        </Card.Meta>
                        <Card.Meta>
                          <span className="cardbottomrow">
                            Level: {item.levelnum}
                          </span>
                        </Card.Meta>
                      </Grid.Column>
                      <Grid.Column>
                        <Card.Meta>
                          <span className="cardbottomrow">
                            Net Area: {item.totalarea}
                          </span>
                        </Card.Meta>
                        <Card.Meta>
                          <span className="cardbottomrow">
                            Common Area: {item.commonarea}
                          </span>
                        </Card.Meta>
                      </Grid.Column>
                      <Grid.Column className="iconselect">
                        <Icon name='check circle outline' />
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

export default Cards;
