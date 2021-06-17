import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { Card, Grid } from "semantic-ui-react";
import { history } from "../../..";
import IFlat from "../../../models/unit";
import { RootStoreContext } from "../../../stores/rootStore";
import { cartButtonStyle, imageContainer } from "./cardStyles";
import CartButton from "./CartButton";

interface IProps {
  item: IFlat;
}

const UnitCard: React.FC<IProps> = ({ item }) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  const rootStore = useContext(RootStoreContext);
  const { selectFlats, addToCart, cartItems } = rootStore.flatStore;

  const handleCardClick = (flat: IFlat) => {
    selectFlats(flat);
    history.push("/maininfo");
  };

  return (
    <div
      className={!isTabletOrMobileDevice ? "cardsize" : "cardsizeformob"}
      onClick={() => handleCardClick(item)}
    >
      <Card fluid>
        <div style={imageContainer}>
          <img
            src={
              "https://www.homeland.aveneur.com/Images" +
              item.images[item.images.length - 1].imageLocation
            }
            height="100%"
            width="100%"
          />
          {!item.isBooked && (
            <CartButton
              style={cartButtonStyle}
              onClick={(e) => {
                e.stopPropagation();
                addToCart(item);
              }}
              disabled={cartItems.some((cartItem) => cartItem.id === item.id)}
            />
          )}
        </div>
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
                  <span className="cardbottomrow">Level: {item.level}</span>
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
};

export default UnitCard;
