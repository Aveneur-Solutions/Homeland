import { Card, Button, Image, Grid, Icon } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
import IFlat from "../../models/unit";
import { useContext } from "react";
import { RootStoreContext } from "../../stores/rootStore";
import { observer } from "mobx-react-lite";
interface IProps {
  units: IFlat[]
}

const ListUnits: React.FC<IProps> = ({ units }) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const tagline = {
    padding: "2%",
    display: "flex",
    justifyContent: "flex-end",
    color: "red"
  }
  const taglineAvailable = {
    padding: "2%",
    display: "flex",
    justifyContent: "flex-end",
    color: "green"
  }

  const rootStore = useContext(RootStoreContext);
  const { viewFlatDetails, addToCart, cartItems } = rootStore.flatStore;
  const handleAddToCart = (unit: IFlat) => {
    addToCart(unit);
  }
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <Grid columns={1}>
          <div className="projCardSize">
            {units && units.map((unit, index) => {
              return (
                <Card key={index} fluid className="projCardSize2">
                  <div
                    style={
                      !unit.isBooked && !unit.isSold
                        ? taglineAvailable
                        : tagline
                    }
                  >
                    {unit.isBooked ? (
                      <h1>Booked</h1>
                    ) : unit.isSold ? (
                      <h1>Sold</h1>
                    ) : (
                      <h1>Available</h1>
                    )}
                  </div>
                  <Image
                    src={
                      "https://www.homeland.aveneur.com/Images" +
                      unit.images[unit.images.length - 1].imageLocation
                    }
                  />
                  <Card.Content>
                    <Card.Header>Unit {unit.id}</Card.Header>
                    <Card.Meta>Sqft.: {unit.size}</Card.Meta>
                    <Card.Description>
                      <strong>Price: {unit.price}</strong> <br />
                      <strong>Booking Price : {unit.bookingPrice}</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <Grid columns={2}>
                      <Grid.Column widescreen={8}>
                        <Button
                          animated="vertical"
                          size="large"
                          style={{
                            background: "rgb(30, 33, 45)",
                            color: "white",
                          }}
                          onClick={() => viewFlatDetails(unit)}
                        >
                          <Button.Content hidden>
                            <Icon name="building" />
                          </Button.Content>
                          <Button.Content visible>View</Button.Content>
                        </Button>
                      </Grid.Column>
                      <Grid.Column widescreen={8}>
                        {!unit.isBooked && !unit.isSold && (
                          <Button
                            animated="vertical"
                            size="large"
                            style={{ background: "rgb(218, 165, 32)", color: 'white'}}
                            disabled={cartItems.some(
                              (cartItem) => cartItem.id === unit.id
                            )}
                            onClick={() => handleAddToCart(unit)}
                          >
                            <Button.Content hidden>
                              <Icon name="shop" />
                            </Button.Content>
                            <Button.Content visible>
                              {cartItems.some(
                                (cartItem) => cartItem.id === unit.id
                              )
                                ? "Added to Cart"
                                : "Add to Cart"}
                            </Button.Content>
                          </Button>
                        )}
                      </Grid.Column>
                    </Grid>
                  </Card.Content>
                </Card>
              );
            })}
          </div>
        </Grid>
      ) : (
        // MOBILE CODE SECTION FROM BELOW
        <div className="projCardSize mobo">
          {units && units.map((unit, index) => {
            return (
              <Card key={index} fluid className="projCardSize2">
                <div
                  style={
                    !unit.isBooked && !unit.isSold ? taglineAvailable : tagline
                  }
                >
                  {unit.isBooked ? (
                    <h1>Booked</h1>
                  ) : unit.isSold ? (
                    <h1>Sold</h1>
                  ) : (
                    <h1>Available</h1>
                  )}
                </div>
                <Image
                  src={
                    "https://www.homeland.aveneur.com/Images" +
                    unit.images[unit.images.length - 1].imageLocation
                  }
                />
                <Card.Content>
                  <Card.Header>Unit {unit.id}</Card.Header>
                  <Card.Meta>Sqft.: {unit.size}</Card.Meta>
                  <Card.Description>
                    <strong>Price: {unit.price}</strong>
                    <strong>Booking Price : {unit.bookingPrice}</strong>
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <Grid columns={2}>
                    <Grid.Column tablet={8} mobile={16}>
                      <Button
                        size="mini"
                        style={{
                          background: "rgb(30, 33, 45)",
                          color: "white",
                        }}
                        onClick={() => viewFlatDetails(unit)}
                      >
                        View
                      </Button>
                    </Grid.Column>
                    <Grid.Column tablet={8} mobile={16}>
                      {!unit.isBooked && !unit.isSold && (
                        <Button
                          size="mini"
                          style={{
                            background: "rgb(218, 165, 32)",
                            color: "white",
                          }}
                          disabled={cartItems.some(
                            (cartItem) => cartItem.id === unit.id
                          )}
                          onClick={() => handleAddToCart(unit)}
                        >
                          {cartItems.some((cartItem) => cartItem.id === unit.id)
                            ? "Added to Cart"
                            : "Add to Cart"}
                        </Button>
                      )}
                    </Grid.Column>
                  </Grid>
                </Card.Content>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
};

export default observer(ListUnits);
