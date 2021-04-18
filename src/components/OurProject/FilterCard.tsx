import { Menu } from "semantic-ui-react";
import "./project.css";

const FilterCard = () => {
  return (
    <Menu text vertical className="filtercontainer">
      <Menu.Item header>Search By</Menu.Item>
      <form>
        <Menu.Item name="Price" />
        <label>
          <input
            name="range1"
            type="checkbox"
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
          />
          3000000-3199999
        </label>
        <br />
        <label>
          <input
            name="range2"
            type="checkbox"
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
          />
          3200000-3399999
        </label>
        <br />
        <label>
          <input
            name="range3"
            type="checkbox"
            // checked={this.state.isGoing}
            // onChange={this.handleInputChange}
          />
          3400000-3600000
        </label>
        <br />
        <Menu.Item name="Size" />
      </form>
    </Menu>
  );
};

export default FilterCard;
