import { observer } from "mobx-react-lite";
import { Image, Input, Button } from "semantic-ui-react";
import "./profile.css";
import "semantic-ui-css/semantic.min.css";
import { useMediaQuery } from "react-responsive";
const Profile = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <div>
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
              Save Photo!
            </Button>
          </div>
        ) : (
          <div className="oldp-containerm">
            <Button
              style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
              action="submit"
            >
              Save Photo!
            </Button>
          </div>
        )}
      </div>
      {/* Password here */}
      <div className="profile-margin">
        <div className="profile-imageheadcontainer">
          <h2>Change Password</h2>
        </div>
        <div className="oldp-container">
          {!isTabletOrMobileDevice ? (
            <div className="oldp">
              <Input fluid placeholder="Old Password..." />
              <Input placeholder="New Password..." />
            </div>
          ) : (
            <div className="oldpm">
              <Input fluid placeholder="Old Password..." />
              <Input placeholder="New Password..." />
            </div>
          )}
        </div>
        {!isTabletOrMobileDevice ? (
          <div className="oldp-container">
            <Button
              style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
              action="submit"
            >
              Change Password !
            </Button>
          </div>
        ) : (
          <div className="oldp-containerm">
            <Button
              style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
              action="submit"
            >
              Change Password!
            </Button>
          </div>
        )}
      </div>

      {/* NID here */}
      <div className="profile-margin">
        <div className="profile-imageheadcontainer">
          <h2>NID Information</h2>
        </div>
        <div className="oldp-container">
            {!isTabletOrMobileDevice?
          <div className="oldp">
            <Input placeholder="NID Number" />
          </div>
          :<div className="oldpm">
          <Input placeholder="NID Number" />
        </div>
          }
        </div>
        {!isTabletOrMobileDevice ? (
          <div className="oldp-container">
            <Button
              style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
              action="submit"
            >
              SAVE !
            </Button>
          </div>
        ) : (
          <div className="oldp-containerm">
            <Button
              style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
              action="submit"
            >
              SAVE!
            </Button>
          </div>
        )}
      </div>
      <div className="profile-bottom-div"></div>
    </div>
  );
};

export default observer(Profile);
