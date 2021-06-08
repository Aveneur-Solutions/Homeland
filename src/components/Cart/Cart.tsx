import "./onlinebooking.css";
import React, { useContext, useState } from "react";
import { RootStoreContext } from "../../stores/rootStore";
import { observer } from "mobx-react-lite";
import IFlat from "../../models/unit";
import { Button } from "semantic-ui-react";

const OnlineBooking = () => {
  const rootStore = useContext(RootStoreContext);
  const { cartItems, cartItemCount, placeOrder, removeFromCart, totalAmount, orderPlaced,cancelOrder } = rootStore.flatStore;
  const { makePayment } = rootStore.userStore;
  const [loading, setLoading] = useState(false);
  const handleRemoveClicked = (item: IFlat) => {
    removeFromCart(item);
  };
  const handleCheckoutClicked = () => {
    setLoading(true);
    placeOrder().then(() => setLoading(false));
  }
  const handlePaymentClicked = () => {
    setLoading(true);
    makePayment().then(() => setLoading(false));
  }
  const handleCancelClicked = () => {
    setLoading(true);
    cancelOrder().then(() => setLoading(false));
  }
  return (
    <div className="online-booking">
      <div className="online-booking-container">
        {orderPlaced ? <h1>Order Summary</h1> : <h1>Online Booking</h1>}

        <div className="form-container1">

          {cartItemCount > 0 ? (
            <div>
              <div className="table-1">
                <table className="tableBook">
                  <thead>
                    <tr className="thead">
                      <th>Unit ID</th>
                      <th>Size</th>
                      <th>Bedrooms</th>
                      <th>Price</th>
                      <th>Price</th>
                      {!orderPlaced && <th>Select</th>}
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item: IFlat) => {
                      return (
                        <tr
                          style={{ borderBottom: "1px solid #E5E5E5" }}
                          key={item.id}
                        >
                          <td>{item.id}</td>
                          <td>{item.size}</td>
                          <td>{item.noOfBedrooms}</td>
                          <td>{item.price}</td>
                          <td>{item.bookingPrice}</td>
                          {!orderPlaced &&
                            <td>
                              <i
                                className="fas fa-trash"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleRemoveClicked(item)}
                              />
                            </td>
                          }

                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="profile-content">
                <p>Total Units: &nbsp;{cartItemCount}</p>
                <p>Total Amount: &nbsp; {totalAmount}</p>

              </div>
              {
                !orderPlaced && <div className="section">
                  <Button loading={loading} color="yellow" onClick={() => handleCheckoutClicked()} className="btn">Proceed for checkout</Button>
                </div>
              }
              {orderPlaced && <div className="section">
              <Button  color="red" loading={loading} onClick={() => handleCancelClicked()} className="btn">Cancel Order</Button>
                <Button loading={loading} color="yellow" onClick={() => handlePaymentClicked()} className="btn">Make Payment</Button>
              </div>}

            </div>
          ) : <div>Empty Cart</div>}
        </div>
      </div>
    </div>
  );
};

export default observer(OnlineBooking);
