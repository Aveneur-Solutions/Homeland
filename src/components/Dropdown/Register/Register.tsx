import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { IUserRegister } from "../../../models/user";
import { RootStoreContext } from "../../../stores/rootStore";
import OtpAuth from "../Login/OtpAuth";
import "./register.css";
import RegisterForm from "./RegisterForm";

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
    registration(data)
      .then(() => setOtp(true))
      .catch((error) => toast.error(error.data.errors.error));
  };

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
        {!otp ? (
          <RegisterForm
            onSubmit={handleSubmit(onRegister)}
            register={register}
            noMatch={noMatch}
            setNoMatch={setNoMatch}
            errors={errors}
            getValues={getValues}
          />
        ) : (
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
