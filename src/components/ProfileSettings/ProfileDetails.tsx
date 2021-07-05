import { observer } from 'mobx-react-lite';
import React from 'react'
import { Button } from 'semantic-ui-react'
import IUser from '../../models/user'
interface IProps {
  user: IUser,
  handleEditable: () => void,
  imageUrl: string,
  handleChangePass : () => void
}
const ProfileDetails: React.FC<IProps> = ({ user, handleEditable, imageUrl ,handleChangePass}) => {
  return (
    <div className="profile">
      <div className="profile-headcontainer">
        <div className="profile-header">
          <h1>My Profile</h1>
        </div>
      </div>
      <div className="profile-img">
        <img
          width="200px"
          style={{
            borderRadius: "50%",
            border: "3px solid var(--primary-color)",
          }}
          src={imageUrl + user?.profileImage}
          alt=""
        />
      </div>
      <div className="profile-content">
        <div className="profile-info">
          <p>NAME:</p>
          <h4>{user?.fullname}</h4>
        </div>
        <div className="profile-info">
          <p>ADDRESS:</p>
          <h4>{user?.address ? user.address : "not added yet"}</h4>
        </div>
        <div className="profile-info">
          <p>PHONE:</p>
          <h4>{user?.phoneNumber}</h4>
        </div>
        <div className="profile-info">
          <p>EMAIL:</p>
          <h4>{user?.email ? user.email : "Not added yet"}</h4>
        </div>
        <div className="profile-info">
          <p>NID:</p>
          <h4>{user?.nid ? user.nid : "Not added yet"}</h4>
        </div>
      </div>
      <div className="btn-container">
        <Button
          onClick={handleEditable}
          style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
        >
          Edit Profile
        </Button>
        <Button onClick={handleChangePass} color="yellow">
          Change Password
        </Button>
      </div>
    </div>
  );
}

export default observer(ProfileDetails)
