import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { Button, Segment, Label } from "semantic-ui-react";
import IFlat from "../../models/unit";
import { RootStoreContext } from "../../stores/rootStore";
import { nextbutton, nextbuttonmobile } from "../customStyles/buttonStyles";

interface IProps {
  flat: IFlat;
  action: (flat: IFlat) => void;
}

const BuildingSlider: React.FC<IProps> = ({ flat, action }) => {
  const rootStore = useContext(RootStoreContext);
  const { cartItems } = rootStore.flatStore;

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1000px)",
  });
  return (
    <div className={!isTabletOrMobileDevice ? "main-container" : "main-container-mob"}>
      <Segment>
        {flat.isBooked && (
          <Label
            style={{
              position: "absolute",
              color: "white",
              backgroundColor: "red",
            }}
            attached="top right"
          >
            Booked
          </Label>
        )}
        {!isTabletOrMobileDevice ? (
          <div className="image-container">
            <img
              src={
                "https://www.homeland.aveneur.com/Images" +
                flat.images[flat.images.length - 1].imageLocation
              }
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        ) : (
          <div className="image-container-mob">
            <img
              src={
                "https://www.homeland.aveneur.com/Images" +
                flat.images[flat.images.length - 1].imageLocation
              }
              alt=""
              style={{ height: "100%", width: "100%" }}
            />
          </div>
        )}
      </Segment>
      <div>
        {!isTabletOrMobileDevice ? (
          <>
            <Button
              type="submit"
              style={nextbutton}
              onClick={() => action(flat)}
              disabled={
                cartItems.some((cartItem) => cartItem.id === flat.id) ||
                flat.isBooked
              }
            >
              <i
                className="fas fa-cart-plus"
                style={{ color: "goldenrod", marginRight: 5 }}
              />
              Add To Cart
            </Button>
            {/* <Button
              type="submit"
              style={nextbutton}
            >
              Buy Now
            </Button> */}
          </>
        ) : (
          <>
            <Button
              type="submit"
              style={nextbuttonmobile}
              onClick={() => action(flat)}
              disabled={
                cartItems.some((cartItem) => cartItem.id === flat.id) ||
                flat.isBooked
              }
            >
              <i
                className="fas fa-cart-plus"
                style={{ color: "goldenrod", marginRight: 5 }}
              />
              Add To Cart
            </Button>
            {/* <Button
              type="submit"
              style={nextbuttonmobile}
            >
              Buy Now
            </Button> */}
          </>
        )}
      </div>
    </div>
  );
};

export default observer(BuildingSlider);
