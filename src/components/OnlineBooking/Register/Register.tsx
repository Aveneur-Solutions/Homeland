import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register">
      
      <div className="register-container">
      <Link to="./login">
        <div className="backbtn">
          <div className="backbtn1">
            <h3>{"<"}</h3>
          </div>
        </div>
      </Link>
        <h1>REGISTER</h1>
        <form action="">
          <div className="form-container">
            <div id="name">
              <label htmlFor="name">
                <b>First Name :</b>
              </label>
              <input type="text" name="name" required></input>
            </div>
            <div id="uname">
              <label htmlFor="uname">
                <b>Last Name :</b>
              </label>
              <input type="text" name="uname" required></input>
            </div>
            <div id="phone">
              <label htmlFor="phone">
                <b>Phone :</b>
              </label>
              <input type="text" name="phone" required></input>
            </div>
            <div id="psw">
              <label htmlFor="psw">
                <b>Password :</b>
              </label>
              <input type="password" name="psw" required></input>
            </div>
            <div id="con-psw">
              <label htmlFor="con-psw">
                <b>Confirm Password :</b>
              </label>
              <input type="password" name="con-psw" required></input>
            </div>
            <div>
              <button className="button">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
