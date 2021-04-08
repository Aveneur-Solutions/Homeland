import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { IUserLoginWithOtp } from "../../../models/user";
import { RootStoreContext } from "../../../stores/rootStore";

interface IProps {
  phoneNo: string;
}

const LoginWithOtp: React.FC<IProps> = ({ phoneNo }) => {
  const rootStore = useContext(RootStoreContext);
  const { loginWithOtp } = rootStore.userStore;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserLoginWithOtp>();

  const onSubmit = (data: IUserLoginWithOtp) => {
    loginWithOtp(data);
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
      <div className="otpwrap">
        <button type="submit" className="otpbutton">
          Login
        </button>
      </div>
    </form>
  );
};

export default observer(LoginWithOtp);
