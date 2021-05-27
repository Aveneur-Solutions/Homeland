import React, { useContext, useEffect } from "react";
import "./myAllotments.css";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../../stores/rootStore";

const MyAllotments = () => {
  const store = useContext(RootStoreContext);
  const {myAllottedFlats,getMyAllottedFlats} = store.userStore;
  useEffect(() => {
    getMyAllottedFlats()
    
  }, [getMyAllottedFlats])
  return (
    <div className="my-allotment">
      <div className="my-allotment-container">
        <h1 style={{ textAlign: "center" }}>My Allotments</h1>
        <div className="allotment-content">
        <div className="profile-homeland-logo">
              <img
                width="100px"
                style={{marginBottom:"12px"}}
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
                {myAllottedFlats ?  myAllottedFlats.map((item, index) => {
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
                }) : <div>You don't have any allotments yet</div>}
              </table>
            </div>
            
            <div className="bottom-content">
              <h5 style={{ textAlign: "center" }}>
                Number of days left for the down payment
              </h5>
              <div className="allotment-down-payment">
                <div className="day">7</div>
                <div className="hour">7</div>
                <div className="sec">7</div>
              </div>
              <p
                style={{
                  color: "red",
                  padding: "5px",
                  width: "55%",
                  textAlign: "center",
                  marginLeft: "20%",
                }}
              >
                You can transfer your allotment through our website only once.
                Want to transfer allotment go to Transfer Units?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(MyAllotments);
