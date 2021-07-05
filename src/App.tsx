import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import OnlineBooking from "./components/OnlineBooking/OnlineBooking";
import { Route, Switch } from "react-router-dom";
import MainHome from "./components/Homepage/MainHome";
import OurStory from "./components/OurStory/ourStory";
import Register from "./components/Dropdown/Register/Register";
import Login from "./components/Dropdown/Login/Login";
import OurProject from "./components/OurProject/OurProject";
import UnitList from "./components/OnlineBooking/UnitList";
import MainInfo from "./components/OnlineBooking/MainInfo";
import Profile from "./components/ProfileSettings/Profile";
import MyAllotments from "./components/Dropdown/MyAllotments/MyAllotments";
import MyBookings from "./components/Dropdown/MyBookings/MyBookings";
import Cart from "./components/Cart/Cart";
import { useContext, useEffect } from "react";
import { RootStoreContext } from "./stores/rootStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TransferUnit from "./components/Dropdown/TransferForm/TransferUnit";
import FailedPayment from "./components/Cart/FailedPayment";
import OrderDetails from "./components/Cart/OrderDetails";
import AvailableUnits from "./components/OnlineBooking/AvailableUnits";
import Announcement from "./components/Dropdown/Announcement/Announcement";

function App() {
  const rootStore = useContext(RootStoreContext);
  const { initCart } = rootStore.flatStore;

  useEffect(() => {
    initCart();
  }, [initCart]);

  return (
    <div className="App">
      <ToastContainer position="bottom-right" />
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainHome} />
        <Route exact path="/ourStory" component={OurStory} />
        <Route exact path="/ourProject" component={OurProject} />
        <Route exact path="/onlineBooking" component={OnlineBooking} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/unitlist" component={UnitList} />
        <Route exact path="/maininfo" component={MainInfo} />
        <Route exact path="/transfer-form" component={TransferUnit} />
        <Route exact path="/my-allotments" component={MyAllotments} />
        <Route exact path="/my-bookings" component={MyBookings} />
        <Route exact path="/available-units" component={AvailableUnits} />
        <Route exact path="/my-profile" component={Profile} />
        <Route exact path="/failedPayment" component={FailedPayment} />
        <Route exact path="/orderDetails" component={OrderDetails} />
        <Route exact path="/announcements" component={Announcement} />
      </Switch>
    </div>
  );
}

export default App;
