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
import TransferForm from "./components/Dropdown/TransferForm/TransferForm";
import MyAllotments from "./components/Dropdown/MyAllotments/MyAllotments";
import MyBookings from "./components/Dropdown/MyBookings/MyBookings";
import Cart from "./components/Cart/Cart";
import { useContext, useEffect } from "react";
import { RootStoreContext } from "./stores/rootStore";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const rootStore = useContext(RootStoreContext);
  const { initCart } = rootStore.flatStore;

  useEffect(() => {
    initCart();
  }, [initCart]);

  return (
    <div className="App">
      <Navbar />
      <ToastContainer position="bottom-right" />
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
        <Route exact path="/transfer-form" component={TransferForm} />
        <Route exact path="/my-allotments" component={MyAllotments} />
        <Route exact path="/my-bookings" component={MyBookings} />
        <Route exact path="/my-profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
