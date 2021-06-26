import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.css";
import { useContext, useState } from "react";
import { RootStoreContext } from "../../../stores/rootStore";
import OtpAuth from "./OtpAuth";
import { IUserLogin } from "../../../models/user";
import { observer } from "mobx-react-lite";
import { toast } from "react-toastify";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import LoginForm from "./LoginForm";

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
        <h1>{!forgot ? "LOG IN" : "FORGOT PASSWORD?"}</h1>
        {!forgot ? (
          <>
            {!otp ? (
              <LoginForm
                onSubmit={handleSubmit(onLogin)}
                register={register}
                errors={errors}
              />
            ) : (
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
        ) : (
          <ForgotPassword setForgot={setForgot} />
        )}
      </div>
    </div>
  );
};

export default observer(Login);
