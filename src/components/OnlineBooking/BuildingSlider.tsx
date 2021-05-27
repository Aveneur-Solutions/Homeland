import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Button } from "semantic-ui-react";
import IFlat from "../../models/unit";
import { RootStoreContext } from "../../stores/rootStore";

interface IProps {
  flat: IFlat;
  action: (flat: IFlat) => void
}

const BuildingSlider: React.FC<IProps> = ({ flat, action }) => {
  const rootStore = useContext(RootStoreContext)
  const {cartItems} = rootStore.flatStore

  return (
    <div className="main-container">
      <div className="image-container">
        <img
          src={"https://www.homeland.aveneur.com/Images" + flat.images[0].imageLocation}
          alt=""
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      {/* <div className="separatingline">
        <hr className="hrnew" />
      </div> */}
      <div>
        <Button
          className="nextbutton"
          type="submit"
          style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
          onClick={() => action(flat)}
          disabled={cartItems.some(cartItem => cartItem.id === flat.id) || flat.isBooked}
        >
          Add To Cart
        </Button>
        <Button
          className="nextbutton"
          type="submit"
          style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
        >
          Buy Now
        </Button>
      </div>
    </div>
  );
};

export default observer(BuildingSlider);
