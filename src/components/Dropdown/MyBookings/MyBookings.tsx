import React, { useContext, useEffect } from "react";
import "./myBookings.css";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../../stores/rootStore";

const MyBookings = () => {
  const store = useContext(RootStoreContext);
  const {myBookedFlats,getMyBookedFlats} = store.userStore;
  useEffect(() => {
    getMyBookedFlats()
  }, [getMyBookedFlats])
  return (
    <div className="my-booking">
      <div className="my-booking-container">
        <h1 style={{ textAlign: "center" }}>My Bookings</h1>
        <div className="booking-content">
          <div className="profile">
           
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
          </div>
          <div className="table-content">
            <h3 className="headingText">My Units:</h3>
            <div className="table-1">
              <table>
                <tr className="thead">
                  <th>Unit ID</th>
                  <th>Size</th>
                  <th>Bedrooms</th>
                  <th>Flat Price</th>
                  <th>Booking Price</th>
                </tr>
                {myBookedFlats ? myBookedFlats.map((item, index) => {
                  return (
                    <tr
                      style={{ borderBottom: "1px solid #E5E5E5" }}
                      key={index}
                    >
                      <td>{item.id}</td>
                      <td>{item.size}</td>
                      <td>{item.noOfBedrooms}</td>
                      <td>Tk {item.price}</td>
                      <td>Tk {item.bookingPrice}</td>
                    </tr>
                  );
                }) : <div>You haven't Book any Units yet.</div>}
              </table>
            </div>      
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(MyBookings);
