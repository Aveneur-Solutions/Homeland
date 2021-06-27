import React, { FormEventHandler } from "react";
import { DeepMap, FieldError, UseFormRegister } from "react-hook-form";
import { IUserLogin } from "../../../models/user";

interface IProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<IUserLogin>;
  errors: DeepMap<IUserLogin, FieldError>;
}

const LoginForm: React.FC<IProps> = ({ onSubmit, register, errors }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className="form-container">
        <div id="uname">
          <label htmlFor="uname">
            <b>PHONE</b>
          </label>
          <input
            type="text"
            placeholder="PHONE"
            defaultValue="+880"
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
          ></input>
          {errors.phoneNumber && (
            <span style={{ color: "red" }}>{errors.phoneNumber.message}</span>
          )}
        </div>
        <div id="psw">
          <label htmlFor="psw">
            <b>PASSWORD</b>
          </label>
          <input
            type="password"
            placeholder="ENTER PASSWORD"
            {...register("password", {
              required: "Password is required",
            })}
          ></input>
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password.message}</span>
          )}
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

export default LoginForm;
