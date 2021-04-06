import React, { Component } from "react";
import { BookingItem as book } from "./BookingItem";
import { Method } from "./PaymentItems";
import "./onlinebooking.css";

class OnlineBooking extends Component {
  state = { clicked: false };

  handleClicked = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <div className="online-booking">
        <div className="online-booking-container">
          <h1>Online Booking</h1>
          <div className="form-container">
            <form action="">
              <div id="first-name">
                <label htmlFor="first-name">
                  <b>First Name :</b>
                </label>
                <input type="text" name="first-name" required></input>
              </div>
              <div id="second-name">
                <label htmlFor="second-name">
                  <b>Second Name :</b>
                </label>
                <input type="text" name="second-name" required></input>
              </div>
              <div id="address">
                <label htmlFor="address">
                  <b>Address :</b>
                </label>
                <input type="text" name="address" required></input>
              </div>
              <div id="uname">
                <label htmlFor="uname">
                  <b>Email :</b>
                </label>
                <input type="email" name="uname" required></input>
              </div>
              <div id="nid">
                <label htmlFor="nid">
                  <b>NID :</b>
                </label>
                <input type="text" name="nid" required></input>
              </div>
              <div id="phone">
                <label htmlFor="phone">
                  <b>Phone :</b>
                </label>
                <input type="email" name="phone" required></input>
              </div>
              <div id="dob">
                <label htmlFor="dob">
                  <b>Birth Date :</b>
                </label>
                <input type="text" name="dob" required></input>
              </div>
              <div id="psw">
                <label htmlFor="psw">
                  <b>Password :</b>
                </label>
                <input type="password" name="psw" required></input>
              </div>
              <div id="con-psw">
                <label htmlFor="con-psw">
                  <b>Confirm Password :</b>
                </label>
                <input type="password" name="con-psw" required></input>
              </div>
              <div className="upload">
                <p>Upload Photo :</p>
                <input type="file" id="img" name="img" accept="image/*"></input>
                <p>
                  <i>size maximum 300kb</i>
                </p>
              </div>
              <table>
                <thead>
                  <tr className="thead">
                    <th>Unit ID</th>
                    <th>Size</th>
                    <th>Bedrooms</th>
                    <th>Price</th>
                    <th>Price</th>
                    <th>Select</th>
                  </tr>
                </thead>
                <tbody>
                {book.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.unit}</td>
                      <td>{item.size}</td>
                      <td>{item.bedrooms}</td>
                      <td>{item.price1}</td>
                      <td>{item.price2}</td>
                    </tr>
                  );
                })}
                </tbody>
              </table>
              <div className="amount">
                <label htmlFor="number">
                  <b>Amount</b>
                </label>
                <input type="number" name="number" required></input>
              </div>
              <div className="select-payment">
                <div className="payment-method" onClick={this.handleClicked}>
                  <h6>Payment method</h6>
                  {Method.map((selected, index) => {
                    return (
                      <img
                        className={
                          this.state.clicked
                            ? "visa-logo selected"
                            : "visa-logo"
                        }
                        key={index}
                        src={process.env.PUBLIC_URL + selected.img}
                        alt={selected.alt}
                      />
                    );
                  })}
                </div>
                <button>Select</button>
              </div>
              <div className="checkbox-container">
                <h4>Where did you hear about us?</h4>
                <div className="checkbox">
                  <div className="checkbox1">
                    <label htmlFor="fb">
                      <b>Facebook</b>
                    </label>
                    <input type="checkbox" name="fb"></input>
                    <label htmlFor="google">
                      <b>Google</b>
                    </label>
                    <input type="checkbox" name="google"></input>
                    <label htmlFor="billboard">
                      <b>Billboard</b>
                    </label>
                    <input type="checkbox" name="billboard"></input>
                    <label htmlFor="others">
                      <b>Others</b>
                    </label>
                  </div>
                  <div className="checkbox2">
                    <input type="checkbox" name="others"></input>
                    <label htmlFor="youtube">
                      <b>Youtube</b>
                    </label>
                    <input type="checkbox" name="youtube"></input>
                    <label htmlFor="newspaper">
                      <b>Newspaper</b>
                    </label>
                    <input type="checkbox" name="newspaper"></input>
                    <label htmlFor="someone">
                      <b>Someone I know</b>
                    </label>
                    <input type="checkbox" name="someone"></input>
                  </div>
                </div>
              </div>
              <div id="btn">
                <button className="button">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default OnlineBooking;
