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
      <div className="profile-img">
        <img
          width="200px"
          style={{
            borderRadius: "50%",
            border: "3px solid var(--primary-color)",
          }}
          src={"https://www.homeland.aveneur.com/Images" + user?.profileImage}
          alt=""
        />
      </div>
      <div className="profile-content">
        <p>NAME: &nbsp;{user?.fullname}</p>
        <p>ADDRESS: &nbsp;{user?.address ? user.address : "not added yet"}</p>
        <p>PHONE: &nbsp; {user?.phoneNumber}</p>
        <p>EMAIL: &nbsp;{user?.email ? user.email : "Not added yet"}</p>
        <p>NID: &nbsp; {user?.nid ? user.nid : "Not added yet"}</p>
      </div>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <Button
          onClick={handleEditable}
          style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
        >
          Edit Profile
        </Button>
        <Button
          onClick={handleChangePass}
          color="yellow"
        >
          Change Password
        </Button>
      </div>

    </div>
  )
}

export default ProfileDetails
