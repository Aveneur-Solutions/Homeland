import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Table,Button } from "semantic-ui-react";
import IFlat from "../../models/unit";
import { useMediaQuery } from "react-responsive";

interface IProps {
  sortedFlats: IFlat[];
}

const UnitList: React.FC<IProps> = ({ sortedFlats }) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  // const rootStore = useContext(RootStoreContext);
  // const { flats, listflats } = rootStore.flatStore;
  // useEffect(() => {
  //   listflats();
  // }, [listflats]);
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="tblpc">
        <Table celled textAlign="center" padded >
          <Table.Header >
            <Table.Row >
              <Table.HeaderCell style={{backgroundColor:"#1e212d", color:"goldenrod"}}>UNIT ID</Table.HeaderCell>
              <Table.HeaderCell style={{backgroundColor:"#1e212d", color:"goldenrod"}}>SIZE</Table.HeaderCell>
              <Table.HeaderCell style={{backgroundColor:"#1e212d", color:"goldenrod"}}>PRICE</Table.HeaderCell>
              <Table.HeaderCell style={{backgroundColor:"#1e212d", color:"goldenrod"}}>BOOKING</Table.HeaderCell>
              <Table.HeaderCell style={{backgroundColor:"#1e212d", color:"goldenrod"}}>Select</Table.HeaderCell>
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
          <Button className="nextbutton" style={{backgroundColor:"#1e212d", color:"goldenrod"}}>Next</Button>
        </Link>
      </div>
      </div>
      ):
      <div className="tbl">
      <table>
          <tr className="tbmh">
              <th style={{backgroundColor:"#1e212d", color:"goldenrod", textAlign:"center"}}>UNIT ID</th>
              <th style={{backgroundColor:"#1e212d", color:"goldenrod", textAlign:"center"}}>SIZE</th>
              <th style={{backgroundColor:"#1e212d", color:"goldenrod", textAlign:"center"}}>PRICE</th>
              <th style={{backgroundColor:"#1e212d", color:"goldenrod", textAlign:"center"}}>BOOKING</th>
              <th style={{backgroundColor:"#1e212d", color:"goldenrod", textAlign:"center"}}>Select</th>
          </tr>
          <tbody>
            {sortedFlats.map((item) => (
              <tr key={item.id}>
                <td style={{textAlign:"center"}}>
                  <p>{item.id}</p>
                </td>
                <td style={{textAlign:"center"}}>
                  <p>{item.size}</p>
                </td>
                
                <td style={{textAlign:"center"}}>
                  <p>{item.price}</p>
                </td>
                <td style={{textAlign:"center"}}>
                  <p>{item.noOfBalconies}</p>
                </td>
                <td style={{textAlign:"center"}}>
                  <p>{item.level}</p>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
        <div className="projectbottommobile buttondiv">
        <Link to="./mainInfo">
          <Button className="nextbuttonmobile" style={{backgroundColor:"#1e212d", color:"goldenrod"}}>Next</Button>
        </Link>
      </div>
        </div>
        }
      
    </>
  );
};

export default observer(UnitList);
