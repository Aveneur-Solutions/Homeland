import React, { useContext, useEffect } from "react";
import "./myBookings.css";
import { observer } from "mobx-react-lite";
import { RootStoreContext } from "../../../stores/rootStore";
import { Header } from "semantic-ui-react";
import { history } from "../../..";

const MyBookings = () => {
  const store = useContext(RootStoreContext);
  const { myBookedFlats, getMyBookedFlats, getMyTransfers, myTransfers } = store.userStore;
  useEffect(() => {
    getMyBookedFlats();
    getMyTransfers();
  }, [getMyBookedFlats, getMyTransfers])
  return (
    <div className="my-booking">
      <div className="my-booking-container">
        <h1 style={{ textAlign: "center" }}>My Bookings</h1>
        <div className="booking-content">
          <div className="booking-profile">

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
          </div>
          <div className="table-content">
            <h3 className="headingText">My Units:</h3>
            <div className="table-1">
              {myBookedFlats.length > 0 ?
                <table>
                  <tr className="thead">
                    <th>Unit ID</th>
                    <th>Size</th>
                    <th>Bedrooms</th>
                    <th>Flat Price</th>
                    <th>Booking Price</th>
                  </tr>
                  {myBookedFlats.map((item, index) => (
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
                  ))}
                </table>
                : <Header textAlign="center" as="h3"> You don't have any booked units.</Header>}
                <button className="btn" onClick={() => history.push("/transfer-form")}>Transfer</button>
              <div className="table-1" style={{ marginTop: "20px" }}>
                <h4>Transfer History</h4>
                <table>
                  <tr className="thead">
                    <th>Unit ID</th>
                    <th>Transferred to</th>
                    <th>Date</th>

                  </tr>
                  {myTransfers.length !== 0 ? myTransfers.map((item, index) => {
                    return (
                      <tr
                        style={{ borderBottom: "1px solid #E5E5E5" }}
                        key={index}
                      >
                        <td>{item.flatId}</td>
                        <td>{item.transferredTo}</td>
                        <td>{item.transferDate}</td>

                      </tr>
                    );
                  }) : <div>You haven't transferred any units yet</div>}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(MyBookings);
