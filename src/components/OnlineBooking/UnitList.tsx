import { observer } from "mobx-react-lite";
import { Card, Grid } from "semantic-ui-react";
import IFlat from "../../models/unit";
import { useMediaQuery } from "react-responsive";
import { useContext } from "react";
import { RootStoreContext } from "../../stores/rootStore";
import { cartButtonStyle, imageContainer } from "./Card/cardStyles";
import CartButton from "./Card/CartButton";

interface IProps {
  sortedFlats: IFlat[];
}

const UnitList: React.FC<IProps> = ({ sortedFlats }) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  const rootStore = useContext(RootStoreContext);
  const {
    selectedFlats,
    selectFlats,
    unselectFlats,
    addToCart,
    cartItems,
  } = rootStore.flatStore;

  const addToSelectedFlats = (flat: IFlat) => {
    selectFlats(flat);
  };

  const removeFromSelectedFlats = (flat: IFlat) => {
    unselectFlats(flat);
  };

  const checkboxStyle = {
    fontSize: 30,
    cursor: "pointer",
  };

  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="cardcontainer">
          <Grid columns={2} divided>
            {sortedFlats.map((item) => (
              <div className="cardhover" key={item.id}>
                <Card fluid>
                  <div style={{ ...imageContainer, height: 400 }}>
                    <img
                      src={
                        "https://www.homeland.aveneur.com/Images" +
                        item.images[item.images.length - 1].imageLocation
                      }
                      alt="Unit loading"
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
                        disabled={cartItems.some(
                          (cartItem) => cartItem.id === item.id
                        )}
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
                            {selectedFlats.some(
                              (flat) => flat.id === item.id
                            ) ? (
                              <i
                                className="fas fa-check-circle"
                                style={checkboxStyle}
                                onClick={() => removeFromSelectedFlats(item)}
                              ></i>
                            ) : (
                              <i
                                className="far fa-circle"
                                style={checkboxStyle}
                                onClick={() => addToSelectedFlats(item)}
                              ></i>
                            )}
                          </Card.Header>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Card.Content>
                </Card>
              </div>
            ))}
          </Grid>
          {/* <div className="projectbottom buttondiv">
            <Link to="./mainInfo">
              <Button
                className="nextbutton"
                style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                disabled={selectedFlats.length === 0}
              >
                Next
              </Button>
            </Link>
          </div> */}
        </div>
      ) : (
        <div className="tbl">
          {sortedFlats.map((item) => (
            <Card fluid key={item.id}>
              <div style={imageContainer}>
                <img
                  src={
                    "https://www.homeland.aveneur.com/Images" +
                    item.images[item.images.length - 1].imageLocation
                  }
                  alt="Unit loading"
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
                    disabled={cartItems.some(
                      (cartItem) => cartItem.id === item.id
                    )}
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
                        {selectedFlats.some((flat) => flat.id === item.id) ? (
                          <i
                            className="fas fa-check-circle"
                            style={checkboxStyle}
                            onClick={() => removeFromSelectedFlats(item)}
                          ></i>
                        ) : (
                          <i
                            className="far fa-circle"
                            style={checkboxStyle}
                            onClick={() => addToSelectedFlats(item)}
                          ></i>
                        )}
                      </Card.Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card>
          ))}
          {/* <div className="projectbottom buttondiv">
            <Link to="./mainInfo">
              <Button
                className="nextbutton"
                style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                disabled={selectedFlats.length === 0}
              >
                Next
              </Button>
            </Link>
          </div> */}
        </div>
      )}
    </>
  );
};
export default observer(UnitList);
