import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { history } from "../../..";
import { IUserLoginWithOtp } from "../../../models/user";
import { RootStoreContext } from "../../../stores/rootStore";

interface IProps {
  phoneNo: string;
  func: (body: IUserLoginWithOtp) => Promise<void>;
  buttonText: string;
}

const OtpAuth: React.FC<IProps> = ({ phoneNo, func, buttonText }) => {
  const rootStore = useContext(RootStoreContext);
  const { user, resendOtp } = rootStore.userStore;
  const { logginIn, booking } = rootStore.navStore;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLoginWithOtp>();

  useEffect(() => {
    if (logginIn && user) {
      history.push("/");
    }
    if (booking && user) {
      history.push("/cart");
    }
    console.log(user);
  }, [user, booking, logginIn]);

  const onSubmit = (data: IUserLoginWithOtp) => {
    func(data).catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        hidden
        {...register("phoneNumber", { required: true })}
        value={phoneNo}
      />
      <input
        type="text"
        {...register("otp", { required: true })}
        placeholder="OTP"
      />
      {errors.otp && <span>Please enter a valid OTP</span>}
      <button type="submit" className="button">
        {buttonText}
      </button>
      <p
        className="forget-link"
        style={{ textAlign: "center", marginTop: 10 }}
        onClick={() => resendOtp(phoneNo).catch((error) => console.log(error))}
      >
        Resend OTP
      </p>
    </form>
  );
};

export default observer(OtpAuth);
