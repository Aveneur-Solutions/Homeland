import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import IFlat from "../../models/unit";

interface IProps {
  sortedFlats: IFlat[]
}

const UnitList: React.FC<IProps> = ({sortedFlats}) => {
  // const rootStore = useContext(RootStoreContext);
  // const { flats, listflats } = rootStore.flatStore;
  // useEffect(() => {
  //   listflats();
  // }, [listflats]);
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
        <Table.Body>
          {sortedFlats.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell>
                <p>{item.id}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{item.size}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{item.noOfBedrooms}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{item.price}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{item.noOfBalconies}</p>
              </Table.Cell>
              <Table.Cell>
                <p>{item.level}</p>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
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
