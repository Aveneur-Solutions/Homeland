import React, { useContext, useEffect } from "react";
import "./myAllotments.css";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../../stores/rootStore";
import EmptyTable from "../../EmptyCartTable/EmptyTable";

const MyAllotments = () => {
  const store = useContext(RootStoreContext);
  const {myAllottedFlats,getMyAllottedFlats} = store.userStore;
  useEffect(() => {
    getMyAllottedFlats()
    
  }, [getMyAllottedFlats])
  return (
    <div className="my-allotment">
      <div className="my-allotment-container">
        {myAllottedFlats.length > 0 ? (
          <h1 style={{ textAlign: "center" }}>My Allotments</h1>
        ) : (
          <h1 style={{ textAlign: "center" }}>Empty Allotments</h1>
        )}
        <div className="allotment-content">
          <div className="profile-homeland-logo">
            <img
              width="100px"
              style={{ marginBottom: "12px" }}
              src={process.env.PUBLIC_URL + "/images/logo_yellow.png"}
              alt=""
            />
            <p>HOMELAND</p>
            <p>TOGETHERNESSS IS HAPPINESS</p>
          </div>
          <div className="table-content">
            <h2 className="headingText">Alloted:</h2>
            <div className="table-1">
              <table>
                <tr className="thead">
                  <th>Unit ID</th>
                  <th>Size</th>
                  <th>Bedrooms</th>
                  <th>Price</th>
                </tr>
                {myAllottedFlats.length > 0 ? (
                  myAllottedFlats.map((item, index) => {
                    return (
                      <tr
                        style={{ borderBottom: "1px solid #E5E5E5" }}
                        key={index}
                      >
                        <td>{item.id}</td>
                        <td>{item.size}</td>
                        <td>{item.noOfBedrooms}</td>
                        <td>Tk {item.price}</td>
                      </tr>
                    );
                  })
                ) : (
                  <EmptyTable />
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(MyAllotments);
