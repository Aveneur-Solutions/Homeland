import React from "react";
import "./transferform.css";
import { observer } from "mobx-react-lite";
import { useForm } from "react-hook-form";
import IUser, { IUserSearch } from "../../../models/user";
interface IProps {
  user: IUser,
  getUser: (data: IUserSearch) => Promise<void>
}
const TransferForm: React.FC<IProps> = ({ user, getUser }) => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUserSearch>();
  const searchUser = (data: IUserSearch) => {
    getUser(data);
    console.log(data.phoneNumber)
  }
  return (
    <div >
      <h1>Transfer Form</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit(searchUser)}>
          <div id="phone">
            <label htmlFor="phone">
              <b>New allottee's Phone :</b>
            </label>
            <div style={{display:"flex"}}>
              <span style={{marginTop:"12px",fontSize:"20px"}}>+88</span>
            <input style={{marginLeft:"5px",fontSize:"20px"}} type="text"  {...register("phoneNumber", { required: true })}></input>
            </div>
            
            {errors.phoneNumber && <span>Enter a phonenumber</span>}
            <div><input className="btn" type="submit" value="Search" /></div>
          </div>
        </form>

      </div>
    </div>
  );
}

export default observer(TransferForm);
