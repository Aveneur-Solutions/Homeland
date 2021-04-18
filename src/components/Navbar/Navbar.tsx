import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Dropdown, Transition } from "semantic-ui-react";
import { RootStoreContext } from "../../stores/rootStore";
import SvgComponent from "./logosvg";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {

  const rootStore = useContext(RootStoreContext);
  const { normalLogin, bookingLogin, setFeatured } = rootStore.navStore;
  const { getUser, user, logout } = rootStore.userStore;
  const { token } = rootStore.commonStore;

  const history = useHistory();

  const [clicked, setClicked] = useState(false);
  const [allotment, setAllotment] = useState(false);
  const [transfer, setTransfer] = useState(false);
  useEffect(() => {
    if (token && !user) {
      getUser();
    }
  }, [token, getUser, user]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleAllotment = () => {
    setAllotment(!allotment);
    history.push("/my-allotments");
  };

  const handleTransfer = () => {
    setTransfer(!transfer);
    history.push("./transfer-form");
  };
  const handleLogout = () => {
    logout();
    history.push("/");
  };

  return (
    <nav className="NavbarItems">
      <Link to="/" className="forlink">
        <SvgComponent />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={
                  item.url === "/onlineBooking" && !user ? "/login" : item.url
                }
                onClick={
                  item.url === "/onlineBooking" && !user
                    ? bookingLogin
                    : () => {}
                }
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="right-content">
        <h6>CONTACT US</h6>
        <i className="navfont fab fa-youtube"></i>
        <i className="navfont fab fa-facebook-square"></i>
        <i className="navfont fas fa-phone"></i>
        <h6>02 4881 1616</h6>
        <i className="navfont fas fa-cart-plus"></i>
      </div>
      <div className="login-content">
        {user ? (
          <div className="foruser">
            <Dropdown className="dropname" text={user.fullname} >
                <Dropdown.Menu
                  className="dropmenu"
                  style={{
                    top: "50px",
                    right: "0",
                    left: "70px",
                    width: "20px",
                  }}
                >
                  <Dropdown.Item
                    text="My Allotments "
                    onClick={handleAllotment}
                  />
                  <Dropdown.Item text="My Bookings" />
                  <Dropdown.Item
                    text="Transfer Allotments"
                    onClick={handleTransfer}
                  />
                  <Dropdown.Item text="Profile Settings" />
                  <Dropdown.Item text="Logout" onClick={handleLogout} />
                </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : (
          <Link to="/login">
            <button onClick={normalLogin}>LOG IN</button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default observer(Navbar);
