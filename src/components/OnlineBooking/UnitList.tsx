import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { Table, Button, Card, Image, Grid } from "semantic-ui-react";
import IFlat from "../../models/unit";
import { useMediaQuery } from "react-responsive";
import { ChangeEvent, useContext } from "react";
import { RootStoreContext } from "../../stores/rootStore";

interface IProps {
  sortedFlats: IFlat[];
}
const UnitList: React.FC<IProps> = ({ sortedFlats }) => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  const rootStore = useContext(RootStoreContext);
  const { selectedFlats, selectFlats, unselectFlats } = rootStore.flatStore;

  const checkboxHandler = (e: ChangeEvent<HTMLInputElement>, flat: IFlat) => {
    const { checked } = e.currentTarget;
    if (checked) selectFlats(flat);
    else unselectFlats(flat);
  };

  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="tblpc">
          {sortedFlats.map((flat) => (
            <Card fluid className="searched-card" key={flat.id}>
              <div style={{ display: "flex" }}>
                <Image
                  src={
                    "https://www.homeland.aveneur.com/Images" +
                    flat.images[flat.images.length - 1].imageLocation
                  }
                  className="searched-card-img"
                  ui={false}
                />
                <Card.Content>
                  <Grid columns={4} divided>
                    <Grid.Row>
                      <Grid.Column>
                        <Card.Header className="cardtoprow  ">
                          Unit ID<h4 className="cardtoplabel">{flat.id}</h4>
                        </Card.Header>
                      </Grid.Column>
                      <Grid.Column>
                        <Card.Header className="cardtoprow ">
                          Size<h4 className="cardtoplabel">{flat.size}</h4>
                          sqft.
                        </Card.Header>
                      </Grid.Column>
                      <Grid.Column>
                        <Card.Header className="cardtoprow ">
                          Price<h4 className="cardtoplabel">{flat.price}</h4>
                          Tk
                        </Card.Header>
                      </Grid.Column>
                      <Grid.Column>
                        <Card.Header className="cardtoprow  ">
                          Building
                          <h4 className="cardtoplabel">
                            {flat.buildingNumber}
                          </h4>
                        </Card.Header>
                      </Grid.Column>
                    </Grid.Row>

                    <Grid.Row>
                      <Grid.Column>
                        <Card.Meta className="cardtoprow">
                          <span className="cardbottomrow">
                            No. of Bedrooms: {flat.noOfBedrooms}
                          </span>
                        </Card.Meta>
                        <Card.Meta className="cardtoprow">
                          <span className="cardbottomrow">
                            Level: {flat.level}
                          </span>
                        </Card.Meta>
                      </Grid.Column>
                      <Grid.Column>
                        <Card.Meta className="cardtoprow">
                          <span className="cardbottomrow">
                            Net Area: {flat.netArea}
                          </span>
                        </Card.Meta>
                        <Card.Meta className="cardtoprow">
                          <span className="cardbottomrow">
                            Common Area: {flat.commonArea}
                          </span>
                        </Card.Meta>
                      </Grid.Column>
                      <Grid.Column>
                        <Card.Header className="cardtoprow">
                          <input
                            type="checkbox"
                            className="searched-unit-checkbox"
                            name={flat.id}
                            value={flat.id}
                            onChange={(e) => checkboxHandler(e, flat)}
                          />
                          <label htmlFor={flat.id}></label>
                        </Card.Header>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Card.Content>
              </div>
            </Card>
          ))}
          <div className="projectbottom buttondiv">
            <Link to="./mainInfo">
              <Button
                className="nextbutton"
                style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                disabled={selectedFlats.length === 0}
              >
                Next
              </Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="tbl">
          {sortedFlats.map((item) => (
            // <Card fluid className="searched-card" style={{maxHeight: 200}}>
            //   <div style={{ display: "flex" }}>
            //     <Image
            //       src={
            //         "https://www.homeland.aveneur.com/Images" +
            //         flat.images[flat.images.length - 1].imageLocation
            //       }
            //       style={{maxHeight: 200}}
            //       className="searched-card-img"
            //       ui={false}
            //     />
            //     <Card.Content>
            //       <Grid columns={3} divided>
            //         <Grid.Row>
            //           <Grid.Column>
            //             <Card.Header className="cardtoprow  ">
            //               Unit ID<h4 className="cardtoplabel">{flat.id}</h4>
            //             </Card.Header>
            //           </Grid.Column>
            //           <Grid.Column>
            //             <Card.Header className="cardtoprow ">
            //               Size<h4 className="cardtoplabel">{flat.size}</h4>
            //               sqft.
            //             </Card.Header>
            //           </Grid.Column>
            //           <Grid.Column>
            //             <Card.Header className="cardtoprow ">
            //               Price<h4 className="cardtoplabel">{flat.price}</h4>
            //               Tk
            //             </Card.Header>
            //           </Grid.Column>
            //           <Grid.Column>
            //             <Card.Header className="cardtoprow  ">
            //               Building
            //               <h4 className="cardtoplabel">
            //                 {flat.buildingNumber}
            //               </h4>
            //             </Card.Header>
            //           </Grid.Column>
            //         </Grid.Row>

            //         <Grid.Row>
            //           <Grid.Column>
            //             <Card.Meta className="cardtoprow">
            //               <span className="cardbottomrow">
            //                 No. of Bedrooms: {flat.noOfBedrooms}
            //               </span>
            //             </Card.Meta>
            //             <Card.Meta className="cardtoprow">
            //               <span className="cardbottomrow">
            //                 Level: {flat.level}
            //               </span>
            //             </Card.Meta>
            //           </Grid.Column>
            //           <Grid.Column>
            //             <Card.Meta className="cardtoprow">
            //               <span className="cardbottomrow">
            //                 Net Area: {flat.netArea}
            //               </span>
            //             </Card.Meta>
            //             <Card.Meta className="cardtoprow">
            //               <span className="cardbottomrow">
            //                 Common Area: {flat.commonArea}
            //               </span>
            //             </Card.Meta>
            //           </Grid.Column>
            //           <Grid.Column>
            //             <Card.Header className="cardtoprow">
            //               <input
            //                 type="checkbox"
            //                 className="searched-unit-checkbox"
            //                 name={flat.id}
            //                 value={flat.id}
            //                 onChange={(e) => checkboxHandler(e, flat)}
            //               />
            //               <label htmlFor={flat.id}></label>
            //             </Card.Header>
            //           </Grid.Column>
            //         </Grid.Row>
            //       </Grid>
            //     </Card.Content>
            //   </div>
            // </Card>
            <Card fluid key={item.id}>
              <Image
                className="cardhover"
                src={
                  "https://www.homeland.aveneur.com/Images" +
                  item.images[item.images.length - 1].imageLocation
                }
                wrapped
                ui={false}
              />
              <Card.Content>
                <Grid columns={3} divided>
                  <Grid.Row>
                    <Grid.Column>
                      <Card.Header className="cardtoprow  ">
                        Unit ID<h4 className="cardtoplabel">{item.id}</h4>
                      </Card.Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Header className="cardtoprow ">
                        Size<h4 className="cardtoplabel">{item.size}</h4>
                        sqft.
                      </Card.Header>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Header className="cardtoprow ">
                        Price<h4 className="cardtoplabel">{item.price}</h4>
                        Tk
                      </Card.Header>
                    </Grid.Column>
                  </Grid.Row>

                  <Grid.Row>
                    <Grid.Column>
                      <Card.Meta>
                        <span className="cardbottomrow">
                          Building: {item.buildingNumber}
                        </span>
                      </Card.Meta>
                      <Card.Meta>
                        <span className="cardbottomrow">
                          Level: {item.level}
                        </span>
                      </Card.Meta>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Meta>
                        <span className="cardbottomrow">
                          Net Area: {item.netArea}
                        </span>
                      </Card.Meta>
                      <Card.Meta>
                        <span className="cardbottomrow">
                          Common Area: {item.commonArea}
                        </span>
                      </Card.Meta>
                    </Grid.Column>
                    <Grid.Column>
                      <Card.Header className="cardtoprow">
                        <input
                          type="checkbox"
                          className="searched-unit-checkbox"
                          name={item.id}
                          value={item.id}
                          onChange={(e) => checkboxHandler(e, item)}
                        />
                        <label htmlFor={item.id}></label>
                      </Card.Header>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </Card.Content>
            </Card>
          ))}
          <div className="projectbottom buttondiv">
            <Link to="./mainInfo">
              <Button
                className="nextbutton"
                style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                disabled={selectedFlats.length === 0}
              >
                Next
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
export default observer(UnitList);
