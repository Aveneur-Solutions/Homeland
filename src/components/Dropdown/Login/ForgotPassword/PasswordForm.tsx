import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Button } from "semantic-ui-react";
import { history } from "../../../..";
import { RootStoreContext } from "../../../../stores/rootStore";
import { buttonContainer } from "./VerificationForm";

const PasswordForm = () => {
  const rootStore = useContext(RootStoreContext);
  const { resetPassword } = rootStore.userStore;

  const [noMatch, setNoMatch] = useState("");

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<{ newPassword: string }>();

  const onSubmit = (data: any) => {
    if (noMatch !== "") return;
    resetPassword(data)
      .then(() => {
        toast.success("Password successfully changed");
        history.push("/");
      })
      .catch((error) => toast.error(error.data.errors.error));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ transform: "translateY(-30px)" }}
      className="form-container"
    >
      <div id="uname">
        <label>
          <b>ENTER NEW PASSWORD</b>
        </label>
        <input
          type="password"
          placeholder="NEW PASSWORD"
          {...register("newPassword", {
            required: "Password field cannot be empty",
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
        {errors.newPassword && (
          <span style={{ color: "red" }}>{errors.newPassword.message}</span>
        )}
      </div>
      <br />
      <div id="uname">
        <label>
          <b>RE-TYPE PASSWORD</b>
        </label>
        <input
          type="password"
          placeholder="CONFIRM NEW PASSWORD"
          onChange={(e) => {
            if (e.target.value !== getValues().newPassword) {
              setNoMatch("Password does not match");
            } else {
              setNoMatch("");
            }
          }}
        ></input>
        {noMatch !== "" && <span style={{ color: "red" }}>{noMatch}</span>}
      </div>
      <div style={buttonContainer}>
        <Button type="submit" color="yellow">
          Update password
        </Button>
      </div>
    </form>
  );
};

export default PasswordForm;
