import React from "react";
import { Button, Image, Segment,Label } from "semantic-ui-react";
import IFlat from "../../models/unit";

interface IProps {
  flat: IFlat;
  action: (flat: IFlat) => void
}

const BuildingSlider: React.FC<IProps> = ({ flat, action }) => {
  return (
    <div className="main-container">
        <Segment>
        <Label style={{position:"absolute", color:"#1e212d", backgroundColor:"goldenrod" }} attached='top right'>Available/Booked</Label>
      <div className="image-container">
        <img
          src={"https://www.homeland.aveneur.com/Images" + flat.images[0].imageLocation}
          alt=""
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      </Segment>
      {/* <div className="separatingline">
        <hr className="hrnew" />
      </div> */}
      <div>
        <Button
          className="nextbutton"
          type="submit"
          style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
          onClick={() => action(flat)}
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

export default BuildingSlider;
