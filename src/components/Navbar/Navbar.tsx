import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";
import { RootStoreContext } from "../../stores/rootStore";
import SvgComponent from "./logosvg";
import { MenuItems } from "./MenuItems";
import { useMediaQuery } from "react-responsive";
import { history } from "../..";
import "./Navbar.css";

const Navbar = () => {
  // const isDesktopOrLaptop = useMediaQuery({
  //   query: "(min-device-width: 1224px)",
  // });
  // const isBigScreen = useMediaQuery({ query: "(min-device-width: 1824px)" });
  // const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  // const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  // const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

  const rootStore = useContext(RootStoreContext);
  const { normalLogin, setFeatured } = rootStore.navStore;
  const { getUser, user, logout } = rootStore.userStore;
  const { token } = rootStore.commonStore;
  const { cartItemCount } = rootStore.flatStore;

  const [clicked, setClicked] = useState(false);
  const [allotment, setAllotment] = useState(false);
  const [bookings, setBookings] = useState(false);
  const [transfer, setTransfer] = useState(false);
  const [scroll, setScroll] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 96.3){
      setScroll(true)
    } else{
      setScroll(false)
    }
  }
  window.addEventListener("scroll", changeBackground);

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

  const handleBookings = () => {
    setBookings(!bookings);
    history.push("/my-bookings");
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
    <div className="main-nav-container">
      <Menu
        pointing
        className={scroll ? "NavbarItems onscroll" : "NavbarItems"}
      >
        <div className="cart-icon">
          <i
            className="navfont fas fa-cart-plus nav-item"
            onClick={() => history.push("/cart")}
          >
            {cartItemCount}
          </i>
        </div>
        <Link to={"/"} className="forlink" onClick={() => setClicked(false)}>
          <SvgComponent />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} onClick={handleClick}>
                <Link
                  className={item.cName}
                  to={item.url}
                  onClick={
                    item.url === "/onlineBooking" ? setFeatured : () => {}
                  }
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
          {isTabletOrMobileDevice && (
            <li>
              {user ? (
                <Dropdown
                  className="dropname-mob"
                  text={"Hi, " + user.fullname.split(" ")[0]}
                >
                  <Dropdown.Menu
                    onClick={handleClick}
                    className="dropmenu-mob"
                    style={{
                      backgroundColor: "white",
                      top: "50px",
                      right: "0",
                      left: "10px",
                      width: "20px",
                      fontWeight: 900,
                    }}
                  >
                    <Dropdown.Item
                      text="My Allotments "
                      onClick={handleAllotment}
                    />
                    <Dropdown.Item
                      text="My Bookings"
                      onClick={handleBookings}
                    />
                    <Dropdown.Item
                      text="Transfer Units"
                      onClick={handleTransfer}
                    />
                    <Dropdown.Item
                      text="Announcements"
                      onClick={() => history.push("/announcements")}
                    />
                    <Dropdown.Item text="My Profile" onClick={handleProfile} />
                    <Dropdown.Item text="Logout" onClick={handleLogout} />
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link to="/login" onClick={handleClick}>
                  LOGIN
                </Link>
              )}
            </li>
          )}
        </ul>
        <div className="right-content">
          <h6>CONTACT US</h6>
          <i className="navfont fab fa-youtube"></i>
          <i className="navfont fab fa-facebook-square"></i>
          <i className="navfont fas fa-phone"></i>
          <h6>02 4881 1616</h6>

          <i
            className="navfont fas fa-cart-plus nav-item"
            onClick={() => history.push("/cart")}
          >
            {cartItemCount}
          </i>
        </div>
        {!isTabletOrMobileDevice && (
          <div className="login-content">
            {user ? (
              <div className="foruser">
                <Dropdown
                  className="dropname"
                  text={"Hi, " + user.fullname.split(" ")[0]}
                >
                  <Dropdown.Menu
                    className="dropmenu"
                    style={{
                      backgroundColor: "goldenrod",
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
                    <Dropdown.Item
                      text="My Bookings"
                      onClick={handleBookings}
                    />
                    <Dropdown.Item
                      text="Transfer Units"
                      onClick={handleTransfer}
                    />
                    <Dropdown.Item
                      text="Announcements"
                      onClick={() => history.push("/announcements")}
                    />
                    <Dropdown.Item text="My Profile" onClick={handleProfile} />
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
        )}
      </Menu>
    </div>
  );
};

export default observer(Navbar);
