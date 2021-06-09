import React from 'react'
import { useMediaQuery } from "react-responsive";
import Logo from '../Navbar/logosvg';
import Keanu from './keanu.png'
import "./onlinebooking.css";

const OrderTable = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
    return (
          <>
            <div className="order-table-container">
              <div className="home-logo">
                <Logo />
              </div>
              <h1 style={{ textAlign: "start" }}>Your Order is Confirmed!</h1>
              <div style={{ marginBottom: "5%" }}>
                <strong>Hi Zunaid,</strong>
                <p>Your order has been confirmed and will be shipping soon</p>
              </div>
              <hr />
              <div className="order-table-info">
                <div>
                  <h5>Order Date</h5>
                  <strong>18 March, 2021</strong>
                </div>
                <div>
                  <h5>Order ID</h5>
                  <strong>152446652</strong>
                </div>
                <div>
                  <h5>Payment</h5>
                  <strong>Visa</strong>
                </div>
                <div>
                  <h5>Address</h5>
                  <strong>somewhere</strong>
                </div>
              </div>
              <hr />
              <br />
              <br />
              <div className="order-table-image">
                <div style={{ display: "flex" }}>
                  <img
                    style={{ width: "15%", marginRight: "5%" }}
                    src={Keanu}
                    alt="keanu"
                  />
                  <h4>Keanu Reeves</h4>
                </div>
                <div>
                  <h4>Qty 1</h4>
                  <h4>2200000TK</h4>
                </div>
              </div>
              <br />
              <br />
              <hr />
              <br />
              <br />
              <div className="order-table-cost">
                <div>
                  <strong>Subtotal</strong>
                  <strong>2200000TK</strong>
                </div>
                <div>
                  <strong>Taxes</strong>
                  <strong>10000TK</strong>
                </div>
                <div>
                  <strong>Discount</strong>
                  <strong>5000TK</strong>
                </div>
              </div>
              <br />
              <br />
              <hr />
              <br />
              <br />
              <div className="order-total">
                <div>
                  <h3>Total</h3>
                </div>
                <div>
                  <h3 style={{color: 'red'}}>2215000TK</h3>
                </div>
              </div>
              <br />
              <br />
              <hr />
              <br />
              <br />
              <div>
                <h2>Thank you for purchasing from HOMELAND! We appreciate your business, and hope you enjoy your purchase.</h2>
              </div>
            </div>
          </>
    );
}

export default OrderTable
