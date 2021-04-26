import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Dropdown, Transition, Menu } from "semantic-ui-react";
import { RootStoreContext } from "../../stores/rootStore";
import SvgComponent from "./logosvg";
import { MenuItems } from "./MenuItems";
import { useMediaQuery } from 'react-responsive'
import "./Navbar.css";

const Navbar = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })


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

  const handleProfile = () => {
    setAllotment(!allotment);
    history.push("/my-profile");
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
    <Menu pointing className="NavbarItems">
      <Link to={"/"} className= "forlink">
        <SvgComponent />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"} >
        {MenuItems.map((item, index) => {
          return (
            <li key={index} onClick={handleClick}>
              <Link
                className={item.cName}
                to={
                  item.url === "/onlineBooking" && !user ? "/login" : item.url
                }
                onClick={
                  item.url === "/onlineBooking" && !user
                    ? bookingLogin
                    : item.url === "/ourProject" ? setFeatured
                    : () => {}
                }
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        {isTabletOrMobileDevice && <li onClick={handleClick}>
          {user ? <Link to="">{user?.fullname}</Link> : <Link to="/login" >LOGIN</Link>}
        </li>}
        
      </ul>
      <div className="right-content">
        <h6>CONTACT US</h6>
        <i className="navfont fab fa-youtube"></i>
        <i className="navfont fab fa-facebook-square"></i>
        <i className="navfont fas fa-phone"></i>
        <h6>02 4881 1616</h6>
        <i className="navfont fas fa-cart-plus"></i>
      </div>
      {!isTabletOrMobileDevice && <div className="login-content">
        {user ? (
          <div className="foruser">
            <Dropdown className="dropname " text={user.fullname}>
              <Dropdown.Menu
                className="dropmenu"
                style={{
                  backgroundColor:"goldenrod",
                  top: "50px",
                  right: "0",
                  left: "20px",
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
                <Dropdown.Item text="Profile Settings" 
                onClick={handleProfile}/>
                <Dropdown.Item text="Logout" onClick={handleLogout} />
              </Dropdown.Menu>
            </Dropdown>
          </div>
        ) : (
          <Link to="/login">
            <button onClick={normalLogin}>LOG IN</button>
          </Link>
        )}
      </div>}
      
    </Menu>
  );
};

export default observer(Navbar);
