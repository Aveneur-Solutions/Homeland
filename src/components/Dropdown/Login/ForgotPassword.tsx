import { ChangeEvent, FormEvent, useState } from "react";

const ForgotPassword = () => {
  const [phoneNo, setPhoneNo] = useState("+880");
  const [otp, setOtp] = useState(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setPhoneNo(value);
  };

  const firstFormHandler = (e: FormEvent) => {
    e.preventDefault();
    setOtp(true);
    console.log(phoneNo);
  };

  return (
    <div>
      <form className="form-container" onSubmit={firstFormHandler}>
        {!otp ? (
          <>
            <div id="uname">
              <label>
                <b>ENTER YOUR REGISTERED PHONE NO.</b>
              </label>
              <input
                name="phoneNo"
                type="text"
                placeholder="PHONE"
                value={phoneNo}
                onChange={onChangeHandler}
              ></input>
            </div>
            <div>
              <button type="submit" className="button">
                Send code
              </button>
            </div>
          </>
        ) : (
            <>
            <div id="uname">
              <label>
                <b>ENTER OTP</b>
              </label>
              <input
                name="otp"
                type="text"
                placeholder="OTP"
                value={phoneNo}
                onChange={onChangeHandler}
              ></input>
            </div>
            <div>
              <button type="submit" className="button">
                Send code
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default ForgotPassword;
