import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import { RootStoreContext } from "../../stores/rootStore";

const UnitList = () => {
  const rootStore = useContext(RootStoreContext);
  const { featuredFlats,listfeatured } = rootStore.flatStore;
    useEffect( () => {
      listfeatured()
    },[listfeatured])
  return (
    <>
      <Table celled textAlign="center" padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>UNIT ID</Table.HeaderCell>
            <Table.HeaderCell>SIZE</Table.HeaderCell>
            <Table.HeaderCell>BEDROOMS</Table.HeaderCell>
            <Table.HeaderCell>PRICE</Table.HeaderCell>
            <Table.HeaderCell>BOOKING</Table.HeaderCell>
            <Table.HeaderCell>Select</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {featuredFlats.map((tem) => {
          return (
        <Table.Body>
          <Table.Row>
            <Table.Cell><p>{tem.id}</p></Table.Cell>
            <Table.Cell><p>{tem.size}</p></Table.Cell>
            <Table.Cell><p>{tem.noOfBedrooms}</p></Table.Cell>
            <Table.Cell><p>{tem.price}</p></Table.Cell>
            <Table.Cell><p>{tem.noOfBalconies}</p></Table.Cell>
            <Table.Cell><p>{tem.level}</p></Table.Cell>
          </Table.Row>
        </Table.Body>
);
      })}
      </Table>
      <div className="projectbottom buttondiv">
        <Link to="./mainInfo">
          <button className="nextbutton">Next</button>
        </Link>
      </div>
    </>
  );
};

export default observer(UnitList);
