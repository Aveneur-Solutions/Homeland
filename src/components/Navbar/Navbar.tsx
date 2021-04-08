import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { RootStoreContext } from "../../stores/rootStore";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

const Navbar = () => {
  const rootStore = useContext(RootStoreContext);
  const { normalLogin, bookingLogin } = rootStore.navStore;
  const { getUser, user, logout } = rootStore.userStore;
  const { token } = rootStore.commonStore;

  const history = useHistory();

  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.log(user);
    if (token && !user) {
      getUser().then(() => console.log(user));
    }
  }, [token, getUser, user]);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleLogout = () => {
    logout();
    history.push("/");
  };

  return (
    <nav className="NavbarItems">
      <Link to="/" className="forlink">
        <img
          className="navbar-logo"
          src={process.env.PUBLIC_URL + "/images/logo.png"}
          alt="Homeland-logo"
        />
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
          <button onClick={handleLogout}>{user.fullname}</button>
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
