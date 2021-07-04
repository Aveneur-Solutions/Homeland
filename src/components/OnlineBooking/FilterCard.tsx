import { SyntheticEvent } from "react";
import { Menu, Button } from "semantic-ui-react";
import "./booking.css";
import { useMediaQuery } from "react-responsive";
import { nextbutton } from "../customStyles/buttonStyles";

interface IProps {
  onFormSubmit: (e: SyntheticEvent<HTMLFormElement>) => void;
  onPriceChange: (e: SyntheticEvent<HTMLInputElement>) => void;
  onSizeChange: (e: SyntheticEvent<HTMLInputElement>) => void;
  priceRange: {
    priceRange1: boolean;
    priceRange2: boolean;
    priceRange3: boolean;
  };
  sizeRange: {
    sizeRange1: boolean;
    sizeRange2: boolean;
    sizeRange3: boolean;
    sizeRange4: boolean;
  };
}

const FilterCard: React.FC<IProps> = ({
  onFormSubmit,
  onPriceChange,
  onSizeChange,
  priceRange,
  sizeRange,
}) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  const hoverStyle = {
    cursor: "pointer",
  };
  return (
    <Menu
      text
      vertical
      className="filtercontainer"
      style={{ paddingTop: "7%" }}
    >
      <Menu.Item className="searchhead">Search By</Menu.Item>
      <div className="filterpad">
        <form onSubmit={onFormSubmit}>
          <Menu.Item name="Price" className="price" />
          <label style={hoverStyle}>
            <input
              className="pR"
              name="priceRange1"
              type="checkbox"
              checked={priceRange.priceRange1}
              onChange={onPriceChange}
            />
            3000000 - 3199999
          </label>
          <br />
          <label style={hoverStyle}>
            <input
              className="pR"
              name="priceRange2"
              type="checkbox"
              checked={priceRange.priceRange2}
              onChange={onPriceChange}
            />
            3200000 - 3399999
          </label>
          <br />
          <label style={hoverStyle}>
            <input
              className="pR"
              name="priceRange3"
              type="checkbox"
              checked={priceRange.priceRange3}
              onChange={onPriceChange}
            />
            3400000 - 3600000
          </label>
          <br />
          <Menu.Item name="Size" className="size" />
          <label style={hoverStyle}>
            <input
              className="pR"
              name="sizeRange1"
              type="checkbox"
              checked={sizeRange.sizeRange1}
              onChange={onSizeChange}
            />
            900 - 920
          </label>
          <br />
          <label style={hoverStyle}>
            <input
              className="pR"
              name="sizeRange2"
              type="checkbox"
              checked={sizeRange.sizeRange2}
              onChange={onSizeChange}
            />
            921 - 950
          </label>
          <br />
          <label style={hoverStyle}>
            <input
              className="pR"
              name="sizeRange3"
              type="checkbox"
              checked={sizeRange.sizeRange3}
              onChange={onSizeChange}
            />
            951 - 980
          </label>
          <br />
          <label style={hoverStyle}>
            <input
              className="pR"
              name="sizeRange4"
              type="checkbox"
              checked={sizeRange.sizeRange4}
              onChange={onSizeChange}
            />
            981 - 1000
          </label>
          {!isTabletOrMobileDevice ? (
            <div className="projectbottom1 buttondiv1">
              <Button type="submit" style={nextbutton}>
                Search
              </Button>
            </div>
          ) : (
            <div className="searchmobile buttondiv1">
              <Button type="submit" style={nextbutton}>
                Search
              </Button>
            </div>
          )}
        </form>
      </div>
    </Menu>
  );
};

export default FilterCard;
