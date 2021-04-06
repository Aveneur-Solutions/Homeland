import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <Link to="/"
        className="forlink">
          <img
            className="navbar-logo"
            src={process.env.PUBLIC_URL + "/images/logo.png"}
            alt="Homeland-logo"
          />
        </Link>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
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
          <Link to="/login">
            <button>LOG IN</button>
          </Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
