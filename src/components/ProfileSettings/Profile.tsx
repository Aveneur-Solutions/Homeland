import { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Image, Input, Button } from "semantic-ui-react";
import "./profile.css";
import "semantic-ui-css/semantic.min.css";
import { useMediaQuery } from "react-responsive";
import { RootStoreContext } from "../../stores/rootStore";
import { useForm } from "react-hook-form";
import { IUserChangePassword } from "../../models/user";
import ProfileDetails from "./ProfileDetails";
import ChangePasword from "./ChangePasword";
import UpdateProfile from "./UpdateProfile";

const Profile = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const [editable, setEditable] = useState(false);
  const [changePass,setChangePassword] = useState(false);
  const handleEditable = () => {
    setEditable(!editable);
  };
  const handleChangePass = () =>{
    setChangePassword(!changePass);
  }
  const rootStore = useContext(RootStoreContext);
  const { user, changePassword,baseImageUrl } = rootStore.userStore;
  return (
    <div>
      {editable ? (
        <div className="profile-container">
          {/* Image here */}
          <div className="profile-margin">
            
          </div>
          {/* Profile Update here */}
          <UpdateProfile handleEditable={handleEditable} imageUrl={baseImageUrl} user={user!}/>
        </div>
      ) : changePass ? <ChangePasword handleChangePassword={handleChangePass} changePassword={changePassword}/> :(
        <ProfileDetails user={user!} handleChangePass={handleChangePass}  imageUrl={baseImageUrl} handleEditable={handleEditable} />
      )}
    </div>
  );
};

export default observer(Profile);
