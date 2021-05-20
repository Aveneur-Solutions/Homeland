import React from "react";
import "./myBookings.css";
import { bookedItems as booked } from "./bookedItems";
import { observer } from "mobx-react-lite";

const MyBookings = () => {
  return (
    <div className="my-allotment">
      <div className="my-allotment-container">
        <h1 style={{ textAlign: "center" }}>My Bookings</h1>
        <div className="allotment-content">
          <div className="profile">
            <div className="profile-img">
              <img
                width="100px"
                style={{ borderRadius: "50px", border: "3px solid var(--primary-color)"}}
                src={process.env.PUBLIC_URL + "/images/profile.png"}
                alt=""
              />
            </div>
            <div className="profile-content">
              <p>NAME: Zunaid</p>
              <p>ADDRESS: Dick Avenue</p>
              <p>PHONE: 69420</p>
              <p>EMAIL: gay@gmail.com</p>
            </div>
            <div className="profile-homeland-logo">
              <img
                width="150px"
                style={{ backgroundColor: "black" }}
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                alt=""
              />
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
                {booked.map((item, index) => {
                  return (
                    <tr
                      style={{ borderBottom: "1px solid #E5E5E5" }}
                      key={index}
                    >
                      <td>{item.unit}</td>
                      <td>{item.size}</td>
                      <td>{item.bedrooms}</td>
                      <td>Tk {item.price}</td>
                      <td>Tk {item.bprice}</td>
                    </tr>
                  );
                })}
              </table>
            </div>
            <div>
              <h3 className="headingText">Payment History:</h3>
            </div>
            <div className="payment-history">
              <div>
                <label>Name of the Bank:</label>
                <p>&nbsp; Eastern Bank</p>
              </div>
              <div>
                <label>Account Number:</label>
                <p>&nbsp; 115555444444</p>
              </div>
              <div>
                <label>Paid Amount:</label>
                <p>&nbsp; 2,00,000</p>
              </div>
              <div>
                <label>Rest of the amount to be paid:</label>
                <p>&nbsp; 25,00,000</p>
              </div>
              <div>
                <label>Number of Installments Paid:</label>
                <p>&nbsp; 5</p>
              </div>
              <div>
                <label>Rest of the number of Installments:</label>
                <p>&nbsp; 40</p>
              </div>
              <div>
                <label>Next date of payment:</label>
                <p>&nbsp; 02/05/21</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(MyBookings);
