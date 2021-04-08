import { observer } from "mobx-react-lite";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { IUserLoginWithOtp } from "../../../models/user";
import { RootStoreContext } from "../../../stores/rootStore";

interface IProps {
  phoneNo: string;
}

const LoginWithOtp: React.FC<IProps> = ({ phoneNo }) => {
  const rootStore = useContext(RootStoreContext);
  const { loginWithOtp, user } = rootStore.userStore;
  const { logginIn, booking } = rootStore.navStore;

  const history = useHistory();

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
      history.push("/onlineBooking");
    }
    console.log(user);
  }, [user]);

  const onSubmit = (data: IUserLoginWithOtp) => {
    loginWithOtp(data).catch((error) => console.log(error));
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
        Login
      </button>
    </form>
  );
};

export default observer(LoginWithOtp);
