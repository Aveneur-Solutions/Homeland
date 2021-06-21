import { Card, Button, Image, Grid } from "semantic-ui-react";
import { useMediaQuery } from "react-responsive";
import IFlat from "../../models/unit";
import { useContext, useState } from "react";
import { RootStoreContext } from "../../stores/rootStore";
import { observer } from "mobx-react-lite";
// import useProgressiveImg from "./UseProgressiveImg";
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
                  <div style={(!unit.isBooked && !unit.isSold) ? taglineAvailable : tagline}>
                    {unit.isBooked ? <h1>Booked</h1> : unit.isSold ? <h1>Sold</h1> : <h1>Available</h1>}
                  </div>
                  <div className="projCardSize2">
                    <Card.Content>
                      <Image
                        src={"https://www.homeland.aveneur.com/Images" + unit.images[unit.images.length - 1].imageLocation}
                      />
                      <Card.Header>Unit {unit.id}</Card.Header>
                      <Card.Meta>Sqft.: {unit.size}</Card.Meta>
                      <Card.Description>
                        <strong>Price: {unit.price}</strong> <br />
                        <strong>Booking Price : {unit.bookingPrice}</strong>
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <div className="ui two buttons">
                        <Button basic color="green" onClick={() => viewFlatDetails(unit)}>
                          View
                        </Button>
                        {(!unit.isBooked && !unit.isSold) &&

                          <Button basic color="red" disabled={cartItems.some((cartItem) => cartItem.id === unit.id)} onClick={() => handleAddToCart(unit)}>
                            {cartItems.some((cartItem) => cartItem.id === unit.id) ? "Added to Cart" : "Add to Cart"}
                          </Button>}
                      </div>
                    </Card.Content>
                  </div>
                </Card>
              );
            })}
          </div>
        </Grid>
      ) : (
        // MOBILE CODE SECTION FROM BELOW
        <div className="projCardSize">
          {units && units.map((unit, index) => {
            return (
              <Card key={index} fluid className="projCardSize2">
                <div style={{ padding: "2%" }}>
                  {unit.isBooked ? <h1>Booked</h1> : unit.isSold ? <h1>Sold</h1> : <h1>Available</h1>}
                </div>

                <div className="projCardSize2">
                  <Card.Content>
                    <Image src={"https://www.homeland.aveneur.com/Images" + unit.images[unit.images.length - 1].imageLocation} />

                    <Card.Header>Unit {unit.id}</Card.Header>
                    <Card.Meta>Sqft.: {unit.size}</Card.Meta>
                    <Card.Description>
                      <strong>Price: {unit.price}</strong>
                      <strong>Booking Price : {unit.bookingPrice}</strong>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green" onClick={() => viewFlatDetails(unit)}>
                        View
                      </Button>
                      <Button basic color="red">
                        Add to Cart
                      </Button>
                    </div>
                  </Card.Content>
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </>
  );
};

export default observer(ListUnits);
