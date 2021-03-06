import "./onlinebooking.css";
import React, { useContext, useState } from "react";
import { RootStoreContext } from "../../stores/rootStore";
import { observer } from "mobx-react-lite";
import IFlat from "../../models/unit";
import { Button } from "semantic-ui-react";
import { history } from "../..";
import EmptyCart from "../EmptyCartTable/EmptyCart";

const OnlineBooking = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    cartItems,
    cartItemCount,
    placeOrder,
    removeFromCart,
    totalAmount,
    orderPlaced,
    cancelOrder,
  } = rootStore.flatStore;
  const { bookingLogin } = rootStore.navStore;
  const { user } = rootStore.userStore;

  const { makePayment } = rootStore.userStore;
  const [loading, setLoading] = useState(false);
  const [cancelloading, setCancel] = useState(false)

  const handleRemoveClicked = (item: IFlat) => {
    removeFromCart(item);
  };

  const handleCheckoutClicked = () => {
    if (!user) {
      bookingLogin();
      history.push("/login");
    } else {
      setLoading(true);
      placeOrder().then(() => setLoading(false));
    }
  };

  const handlePaymentClicked = () => {
    setCancel(true);
    makePayment().then(() => setLoading(false));
  };

  const handleCancelClicked = () => {
    setLoading(true);
    cancelOrder().then(() => setLoading(false));
  };

  return (
    <div className="online-booking">
      <div className="online-booking-container">
        {orderPlaced ? <h1>Order Summary</h1> : ""}

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
                      <th>Booking Price</th>
                      {!orderPlaced && <th>Remove</th>}
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
                          {!orderPlaced && (
                            <td>
                              <i
                                className="fas fa-trash"
                                style={{ cursor: "pointer" }}
                                onClick={() => handleRemoveClicked(item)}
                              />
                            </td>
                          )}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="profile-content">
                <strong>Total Units: &nbsp;{cartItemCount}</strong>
                <strong>Total Amount: &nbsp; {totalAmount}</strong>
              </div>
              {!orderPlaced && (
                <div className="section">
                  <Button
                    loading={loading}
                    color="yellow"
                    onClick={() => handleCheckoutClicked()}
                    className="btn"
                  >
                    Proceed for checkout
                  </Button>
                </div>
              )}
              {orderPlaced && (
                <div className="section">
                  <Button
                    color="red"
                    loading={loading}
                    onClick={() => handleCancelClicked()}
                    className="btn"
                  >
                    Cancel Order
                  </Button>
                  <Button
                    loading={cancelloading}
                    color="yellow"
                    onClick={() => handlePaymentClicked()}
                    className="btn"
                  >
                    Make Payment
                  </Button>
                </div>
              )}
            </div>
          ) : ( 
            <EmptyCart />
          )}
        </div>
      </div>
    </div>
  );
};

export default observer(OnlineBooking);
