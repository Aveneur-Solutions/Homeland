import "./onlinebooking.css";
import { useContext } from "react";
import { RootStoreContext } from "../../stores/rootStore";
import { observer } from "mobx-react-lite";

const OnlineBooking = () => {
  const rootStore = useContext(RootStoreContext);
  const { cartItems, bookFlat, removeFromCart } = rootStore.flatStore;

  return (
    <div className="online-booking">
      <div className="online-booking-container">
        <h1>Online Booking</h1>
        <div className="form-container1">
          <form onSubmit={(e) => {
            e.preventDefault()
            bookFlat()
          }}>
            <div className="table-1">
              <table className="tableBook">
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
                  {cartItems.map((item) => {
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
                        <td>
                          <i
                            className="fas fa-trash"
                            style={{ cursor: "pointer" }}
                            onClick={() => removeFromCart(item)}
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {/* <div className="amount">
              <label htmlFor="number">
                <b>Amount</b>
              </label>
              <input type="number" name="number" required></input>
            </div>
            <div className="select-payment">
              <div className="payment-method" onClick={handleClick}>
                <h6>Payment method</h6>
                {Method.map((selected, index) => {
                  return (
                    <img
                      className={clicked ? "visa-logo selected" : "visa-logo"}
                      key={index}
                      src={process.env.PUBLIC_URL + selected.img}
                      alt={selected.alt}
                    />
                  );
                })}
              </div>
              <button>Select</button>
            </div> */}
            <div className="section">
              <div className="checkbox-container">
                <h4 style={{ textAlign: "center" }}>
                  Where did you hear about us?
                </h4>
                <div className="checkbox">
                  <div className="checkbox-content-1">
                    <div className="checkbox-item">
                      <input type="checkbox" name="fb"></input>
                      <label htmlFor="fb">
                        <b>Facebook</b>
                      </label>
                    </div>
                    <div className="checkbox-item">
                      <input type="checkbox" name="google"></input>
                      <label htmlFor="google">
                        <b>Google</b>
                      </label>
                    </div>
                    <div className="checkbox-item">
                      <input type="checkbox" name="billboard"></input>
                      <label htmlFor="billboard">
                        <b>Billboard</b>
                      </label>
                    </div>
                    <div className="checkbox-item">
                      <input type="checkbox" name="others"></input>
                      <label htmlFor="others">
                        <b>Others</b>
                      </label>
                    </div>
                  </div>
                  <div className="checkbox-content-2">
                    <div className="checkbox-item">
                      <input type="checkbox" name="youtube"></input>
                      <label htmlFor="youtube">
                        <b>Youtube</b>
                      </label>
                    </div>
                    <div className="checkbox-item">
                      <input type="checkbox" name="newspaper"></input>
                      <label htmlFor="newspaper">
                        <b>Newspaper</b>
                      </label>
                    </div>
                    <div className="checkbox-item">
                      <input type="checkbox" name="someone"></input>
                      <label htmlFor="someone">
                        <b>Someone I know</b>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <button type="submit" className="btn">Proceed For Check Out</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default observer(OnlineBooking);
