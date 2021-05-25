import React, { Component, useContext, useEffect } from "react";
import { TransferItem as transfer } from "./TransferItem";
import "./transferform.css";
import { RootStoreContext } from "../../../stores/rootStore";
import { observer } from "mobx-react-lite";

const TransferForm = () => {
  const store = useContext(RootStoreContext);
  const { myBookedFlats, getMyBookedFlats } = store.userStore;
  useEffect(() => {
    getMyBookedFlats()
  }, [getMyBookedFlats])

  return (
    <div className="online-booking">
      <div className="online-booking-container">
        <h1>Transfer Form</h1>
        <div className="form-container">
          <form action="">
            <div id="phone">
              <label htmlFor="phone">
                <b>New allottee's Phone :</b>
              </label>
              <input type="email" name="phone" required></input>
              <div><input type="submit" value="Search" /></div>
            </div>
            <div className="table-1">
              <table>
                <tr className="thead">
                  <th>Unit ID</th>
                  <th>Size</th>
                  <th>Bedrooms</th>
                  <th>Price</th>
                  <th>Price</th>
                  <th>Select</th>
                </tr>
                {myBookedFlats.map((item, index) => {
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
                      <td> <input type="checkbox" name="someone"></input></td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <button className="btn">Transfer</button>
          </form>
          <h5 style={{ textAlign: "center" }}>
            Number of days left for the down payment
            </h5>
          <div className="down-payment">
            <div className="day">7</div>
            <div className="hour">7</div>
            <div className="sec">7</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default observer(TransferForm);
