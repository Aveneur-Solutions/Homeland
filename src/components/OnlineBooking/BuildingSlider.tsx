import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { Button, Image, Segment, Label } from "semantic-ui-react";
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
    <div className="main-container">
      <Segment>
        {flat.isBooked && (
          <Label
            style={{
              position: "absolute",
              // color: "#1e212d",
              // backgroundColor: "goldenrod",
              color: "white",
              backgroundColor: "red",
            }}
            attached="top right"
          >
            Booked
          </Label>
        )}
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
              Add To Cart
            </Button>
            <Button
              type="submit"
              style={nextbutton}
            >
              Buy Now
            </Button>
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
              Add To Cart
            </Button>
            <Button
              type="submit"
              style={nextbuttonmobile}
            >
              Buy Now
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default observer(BuildingSlider);
