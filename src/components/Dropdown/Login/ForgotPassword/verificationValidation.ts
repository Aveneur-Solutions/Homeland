import { toast } from "react-toastify";

interface Props {
  phoneNumber: string;
  otp: string;
}

const verificationValidation = (otp: boolean, input: Props) => {
  if (!otp && input.phoneNumber === "") {
    toast.error("Phone number cannot be empty");
    return;
  } else if (otp && input.otp === "") {
    toast.error("Enter your OTP first!");
    return;
  }
};

export default verificationValidation;
