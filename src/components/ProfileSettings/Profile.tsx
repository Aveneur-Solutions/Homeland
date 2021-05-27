import { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Image, Input, Button } from "semantic-ui-react";
import "./profile.css";
import "semantic-ui-css/semantic.min.css";
import { useMediaQuery } from "react-responsive";
import { RootStoreContext } from "../../stores/rootStore";
import { useForm } from "react-hook-form";
import { IUserChangePassword } from "../../models/user";

const Profile = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const [editable, setEditable] = useState(false);
  const handleEditable = () => {
    setEditable(!editable);
  };
  const rootStore = useContext(RootStoreContext);
  const {user, changePassword} = rootStore.userStore;
  const {register,handleSubmit, formState:{errors},} = useForm<IUserChangePassword>();

  const onChangePass = (data: IUserChangePassword) => {
    changePassword(data);
  };

  return (
    <div>
      {editable ? (
        <div className="profile-container">
          <div className="profile-headcontainer">
            <div className="profile-header">
              <h1>My Profile</h1>
            </div>
          </div>
          {/* Image here */}
          <div className="profile-margin">
            <div className="profile-imageheadcontainer">
              <h2>Edit Photo</h2>
            </div>
            <div className="profile-imagecontainer">
              <div className="profile-image">
                <Image src="/images/4.jpg" size="medium" circular />
              </div>
            </div>
            {!isTabletOrMobileDevice ? (
              <div className="oldp-container">
                <Button
                  style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                  action="submit"
                >
                  Save Photo
                </Button>
              </div>
            ) : (
              <div className="oldp-containerm">
                <Button
                  style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                  action="submit"
                >
                  Save Photo
                </Button>
              </div>
            )}
          </div>
          {/* Password here */}
          <div className="profile-margin">
            <div className="profile-imageheadcontainer">
              <h2>Change Password</h2>
            </div>
            <form onSubmit={handleSubmit(onChangePass)}>
            <div className="oldp-container">
              {!isTabletOrMobileDevice ? (
                <div className="oldp">
                  <input id="oldpInput" type="password" placeholder="Old Password" {...register("oldPassword", { required: true })}/>
                  {errors.oldPassword && <span>Old password is required</span>}
                </div>
              ) : (
                <div className="oldpm">
                  <input id="oldpInput" type="password" placeholder="Old Password" {...register("oldPassword", { required: true })}/>
                  {errors.oldPassword && <span>Old Password is required</span>}
                </div>
              )}
              </div>
              <div className="oldp-container">
              {!isTabletOrMobileDevice ? (
                <div className="oldp">
                  <input id="oldpInput" type="password" placeholder="New Password" {...register("newPassword", { required: true })}/>
                  {errors.newPassword && <span>New Password is required</span>}
                </div>
              ) : (
                <div className="oldpm">
                  <input id="oldpInput" type="password" placeholder="New Password" {...register("newPassword", { required: true })}/>
                  {errors.newPassword && <span>New Password is required</span>}
                </div>
              )}
            </div>
            {!isTabletOrMobileDevice ? (
              <div className="oldp-container">
                <Button
                  style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                  action="submit"
                >
                  Change Password
                </Button>
              </div>
            ) : (
              <div className="oldp-containerm">
                <Button
                  style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                  action="submit"
                >
                  Change Password
                </Button>
              </div>
            )}
            </form>
          </div>

          {/* NID here */}
          <div className="profile-margin">
            <div className="profile-imageheadcontainer">
              <h2>Personal Information</h2>
            </div>
            <form>
            <div className="oldp-container">
              {!isTabletOrMobileDevice ? (
                <div className="oldp">
                  <Input placeholder="Name" />
                </div>
              ) : (
                <div className="oldpm">
                  <Input placeholder="Name" />
                </div>
              )}
            </div>
            <div className="oldp-container">
              {!isTabletOrMobileDevice ? (
                <div className="oldp">
                  <Input placeholder="Address" />
                </div>
              ) : (
                <div className="oldpm">
                  <Input placeholder="Address" />
                </div>
              )}
            </div>
            <div className="oldp-container">
              {!isTabletOrMobileDevice ? (
                <div className="oldp">
                  <Input placeholder="Email Address" />
                </div>
              ) : (
                <div className="oldpm">
                  <Input placeholder="Email Address" />
                </div>
              )}
            </div>
            <div className="oldp-container">
              {!isTabletOrMobileDevice ? (
                <div className="oldp">
                  <Input placeholder="NID Number" />
                </div>
              ) : (
                <div className="oldpm">
                  <Input placeholder="NID Number" />
                </div>
              )}
            </div>
            {!isTabletOrMobileDevice ? (
              <div className="oldp-container">
                <Button
                  style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                  action="submit" onClick={handleEditable}
                >
                  Save
                </Button>
              </div>
            ) : (
              <div className="oldp-containerm">
                <Button
                  style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                  action="submit"onClick={handleEditable}
                >
                  Save
                </Button>
              </div>
            )}
            </form>
          </div>
          <div className="profile-bottom-div"></div>
        </div>
      ) : (
        <div className="profile">
          <div className="profile-img">
            <img
              width="200px"
              style={{
                borderRadius: "50%",
                border: "3px solid var(--primary-color)",
              }}
              src={process.env.PUBLIC_URL + "/images/profile.png"}
              alt=""
            />
          </div>
          <div className="profile-content">
            <p>NAME: &nbsp;{user?.fullname}</p>
            <p>ADDRESS: &nbsp; Not added yet</p>
            <p>PHONE: &nbsp; {user?.phoneNumber}</p>
            <p>EMAIL: &nbsp; Not added yet</p>
            <p>NID: &nbsp; Not added yet</p>
          </div>     
            <Button
              onClick={handleEditable}
              style={{backgroundColor: "#1e212d", color: "goldenrod" }}
            >
              Edit Profile
            </Button>
          <div className="profile-homeland-logo">
            <img
              width="100px"
              src={process.env.PUBLIC_URL + "/images/logo_yellow.png"}
              alt=""
            />
            <p>HOMELAND</p>
            <p>TOGETHERNESSS IS HAPPINESS</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default observer(Profile);
