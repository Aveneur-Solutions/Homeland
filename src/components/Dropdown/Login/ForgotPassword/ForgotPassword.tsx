import { observer } from "mobx-react-lite";
import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";
import { RootStoreContext } from "../../../../stores/rootStore";
import PasswordForm from "./PasswordForm";
import VerificationForm from "./VerificationForm";
import verificationValidation from "./verificationValidation";

interface IProps {
  setForgot: React.Dispatch<React.SetStateAction<boolean>>;
}

const ForgotPassword: React.FC<IProps> = ({ setForgot }) => {
  const rootStore = useContext(RootStoreContext);
  const { resendOtp, loginWithOtp } = rootStore.userStore;

  const [input, setInput] = useState({
    phoneNumber: "+880",
    otp: "",
  });
  const [otp, setOtp] = useState(false);
  const [passwordForm, setPasswordForm] = useState(false);
  const [buttonLoading, setButtonLoading] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const firstFormHandler = (e: FormEvent) => {
    e.preventDefault();

    // verification done by custom method
    verificationValidation(otp, input);
    
    setButtonLoading(true);
    if (!otp) {
      resendOtp(input.phoneNumber)
        .then(() => setOtp(true))
        .catch((error) => toast.error(error.data.errors.error))
        .finally(() => setButtonLoading(false));
    } else {
      loginWithOtp(input)
        .then(() => setPasswordForm(true))
        .catch((error) => toast.error(error.data.errors.error))
        .finally(() => setButtonLoading(false));
    }
  };

  const backButtonHandler = () => {
    if (!otp && !passwordForm) {
      setForgot(false);
    } else if (otp && !passwordForm) {
      setOtp(false);
    } else {
      setPasswordForm(false);
    }
  };

  return (
    <div>
      <div
        style={{ transform: "translateY(-40px)", cursor: "pointer" }}
        onClick={backButtonHandler}
      >
        <i
          className="fas fa-chevron-left"
          style={{ color: "goldenrod", fontSize: 30 }}
        ></i>
      </div>
      {!passwordForm ? (
        <form
          style={{ transform: "translateY(-30px)" }}
          className="form-container"
          onSubmit={firstFormHandler}
        >
          {!otp ? (
            <VerificationForm
              inputName="phoneNumber"
              placeHolder="PHONE"
              inputValue={input.phoneNumber}
              label="ENTER YOUR REGISTERED PHONE NO."
              onChangeHandler={onChangeHandler}
              buttonLoading={buttonLoading}
            />
          ) : (
            <VerificationForm
              inputName="otp"
              placeHolder="OTP"
              inputValue={input.otp}
              label="ENTER OTP"
              onChangeHandler={onChangeHandler}
              buttonLoading={buttonLoading}
            />
          )}
        </form>
      ) : (
        <PasswordForm />
      )}
    </div>
  );
};

export default observer(ForgotPassword);
