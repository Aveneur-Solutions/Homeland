import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { IUserRegister } from "../../../models/user";
import { RootStoreContext } from "../../../stores/rootStore";
import OtpAuth from "../Login/OtpAuth";
import "./register.css";

const Register = () => {
  const rootStore = useContext(RootStoreContext);
  const { registration, registerWithOtp } = rootStore.userStore;

  const [phoneNo, setPhoneNo] = useState("");
  const [noMatch, setNoMatch] = useState("");
  const [otp, setOtp] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<IUserRegister>();

  const onRegister = (data: IUserRegister) => {
    if (noMatch !== "") return;
    setPhoneNo(data.phoneNumber);
    registration(data).then(() => setOtp(true));
  };

  return (
    <div className="register">
      <Link to="./login">
        <div className="backbtn">
          <div className="backbtn1">
            <h3>{"<"}</h3>
          </div>
        </div>
      </Link>
      <div className="register-container">
        <h1>REGISTER</h1>
        <form onSubmit={handleSubmit(onRegister)}>
          <div className="form-container">
            <div id="name">
              <label htmlFor="name">
                <b>First Name :</b>
              </label>
              <input
                type="text"
                {...register("firstName", {
                  required: "First name is required",
                })}
              ></input>
              {errors.firstName && <span>{errors.firstName.message}</span>}
            </div>
            <div id="uname">
              <label htmlFor="uname">
                <b>Last Name :</b>
              </label>
              <input
                type="text"
                {...register("lastName", {
                  required: "Last name is required",
                })}
              ></input>
              {errors.lastName && <span>{errors.lastName.message}</span>}
            </div>
            <div id="phone">
              <label htmlFor="phone">
                <b>Phone :</b>
              </label>
              <input
                type="text"
                defaultValue="+880"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
              ></input>
            </div>
            <div id="psw">
              <label htmlFor="psw">
                <b>Password :</b>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
              ></input>
              {errors.password && <span>{errors.password.message}</span>}
            </div>
            <div id="con-psw">
              <label htmlFor="con-psw">
                <b>Confirm Password :</b>
              </label>
              <input
                type="password"
                name="confPsw"
                onChange={(e) => {
                  if (e.target.value !== getValues().password) {
                    setNoMatch("Password does not match");
                  } else {
                    setNoMatch("");
                  }
                }}
              ></input>
              {noMatch !== "" && <span>{noMatch}</span>}
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
            func={registerWithOtp}
            buttonText="Register"
          />
        )}
      </div>
    </div>
  );
};

export default observer(Register);
