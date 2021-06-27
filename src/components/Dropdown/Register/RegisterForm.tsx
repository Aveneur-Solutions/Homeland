import { Dispatch, FormEventHandler } from "react";
import {
  DeepMap,
  FieldError,
  UseFormGetValues,
  UseFormRegister,
} from "react-hook-form";
import { IUserRegister } from "../../../models/user";

interface IProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<IUserRegister>;
  errors: DeepMap<IUserRegister, FieldError>;
  noMatch: string;
  getValues: UseFormGetValues<IUserRegister>;
  setNoMatch: Dispatch<React.SetStateAction<string>>;
}

const RegisterForm: React.FC<IProps> = ({
  onSubmit,
  register,
  errors,
  noMatch,
  getValues,
  setNoMatch,
}) => {
  const errorStyle = {
    color: "red",
  };

  return (
    <form onSubmit={onSubmit}>
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
          {errors.firstName && (
            <span style={errorStyle}>{errors.firstName.message}</span>
          )}
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
          {errors.lastName && (
            <span style={errorStyle}>{errors.lastName.message}</span>
          )}
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
          {errors.phoneNumber && (
            <span style={errorStyle}>{errors.phoneNumber.message}</span>
          )}
        </div>
        <div id="psw">
          <label htmlFor="psw">
            <b>Password :</b>
          </label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be a minimum of 6 characters",
              },
              pattern: {
                value:
                  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
                message:
                  "At least 1 uppercase, 1 lowercase, 1 digit and 1 special character is needed",
              },
            })}
          ></input>
          {errors.password && (
            <span style={errorStyle}>{errors.password.message}</span>
          )}
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
          {noMatch !== "" && <span style={errorStyle}>{noMatch}</span>}
        </div>
        <div>
          <button type="submit" className="button">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
