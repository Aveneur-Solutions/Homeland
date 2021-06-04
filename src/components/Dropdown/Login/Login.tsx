import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.css";
import { useContext, useState } from "react";
import { RootStoreContext } from "../../../stores/rootStore";
import OtpAuth from "./OtpAuth";
import { IUserLogin } from "../../../models/user";
import { observer } from "mobx-react-lite";
import { toast } from "react-toastify";
import ForgotPassword from "./ForgotPassword";

const Login = () => {
  const rootStore = useContext(RootStoreContext);
  const { login, loginWithOtp } = rootStore.userStore;

  const [phoneNo, setPhoneNo] = useState("");
  const [otp, setOtp] = useState(false);
  const [forgot, setForgot] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLogin>();

  const onLogin = (data: IUserLogin) => {
    setPhoneNo(data.phoneNumber);
    login(data)
      .then(() => setOtp(true))
      .catch((error) => toast.error(error.data.errors.error));
  };

  return (
    <div className="login">
      <div className="login-container">
        {forgot && (
          <div onClick={() => setForgot(false)}>
            <i className="fas fa-chevron-left" style={{color: "goldenrod", fontSize: 30}}></i>
          </div>
        )}
        <h1>{!forgot ? "LOG IN" : "FORGOT PASSWORD?"}</h1>
        {!forgot ? (
          <>
            <form onSubmit={handleSubmit(onLogin)}>
              <div className="form-container">
                <div id="uname">
                  <label htmlFor="uname">
                    <b>PHONE</b>
                  </label>
                  <input
                    type="text"
                    placeholder="PHONE"
                    defaultValue="+880"
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                    })}
                  ></input>
                  {errors.phoneNumber && (
                    <span style={{ color: "red" }}>
                      {errors.phoneNumber.message}
                    </span>
                  )}
                </div>
                <div id="psw">
                  <label htmlFor="psw">
                    <b>PASSWORD</b>
                  </label>
                  <input
                    type="password"
                    placeholder="ENTER PASSWORD"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  ></input>
                  {errors.password && (
                    <span style={{ color: "red" }}>
                      {errors.password.message}
                    </span>
                  )}
                </div>
                <div>
                  <button type="submit" className="button">
                    Submit
                  </button>
                </div>
              </div>
            </form>
            {otp && (
              <OtpAuth
                phoneNo={phoneNo}
                func={loginWithOtp}
                buttonText="Login"
              />
            )}
            <div id="links">
              <div className="forget-pas">
                <span className="forget-link" onClick={() => setForgot(true)}>
                  Forget Password?
                </span>
              </div>
              <div className="reg-acc">
                <Link to="/register">Register an Account</Link>
              </div>
            </div>
          </>
        ) : <ForgotPassword />}
      </div>
    </div>
  );
};

export default observer(Login);
