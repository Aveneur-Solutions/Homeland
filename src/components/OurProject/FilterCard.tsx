import { SyntheticEvent } from "react";
import { Menu } from "semantic-ui-react";
import "./project.css";

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
  return (
    <Menu text vertical className="filtercontainer">
      <Menu.Item header>Search By</Menu.Item>
      <form onSubmit={onFormSubmit}>
        <Menu.Item name="Price" />
        <label>
          <input
            name="priceRange1"
            type="checkbox"
            checked={priceRange.priceRange1}
            onChange={onPriceChange}
          />
          3000000-3199999
        </label>
        <br />
        <label>
          <input
            name="priceRange2"
            type="checkbox"
            checked={priceRange.priceRange2}
            onChange={onPriceChange}
          />
          3200000-3399999
        </label>
        <br />
        <label>
          <input
            name="priceRange3"
            type="checkbox"
            checked={priceRange.priceRange3}
            onChange={onPriceChange}
          />
          3400000-3600000
        </label>
        <br />
        <Menu.Item name="Size" />
        <label>
          <input
            name="sizeRange1"
            type="checkbox"
            checked={sizeRange.sizeRange1}
            onChange={onSizeChange}
          />
          900-920
        </label>
        <br />
        <label>
          <input
            name="sizeRange2"
            type="checkbox"
            checked={sizeRange.sizeRange2}
            onChange={onSizeChange}
          />
          921-950
        </label>
        <br />
        <label>
          <input
            name="sizeRange3"
            type="checkbox"
            checked={sizeRange.sizeRange3}
            onChange={onSizeChange}
          />
          951-980
        </label>
        <br />
        <label>
          <input
            name="sizeRange4"
            type="checkbox"
            checked={sizeRange.sizeRange4}
            onChange={onSizeChange}
          />
          981-1000
        </label>
        <br />
        <div className="projectbottom buttondiv1">
          <button className="nextbutton1" type="submit">
            Search
          </button>
        </div>
      </form>
    </Menu>
  );
};

export default FilterCard;
