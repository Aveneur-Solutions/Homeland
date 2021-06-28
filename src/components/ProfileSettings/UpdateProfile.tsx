import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import { Button, Image } from 'semantic-ui-react'
import IUser, { IProfileUpdate } from '../../models/user';
import { RootStoreContext } from '../../stores/rootStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './profile.css'
import { observer } from 'mobx-react-lite';
interface IProps {
    handleEditable: () => void,
    user: IUser,
    imageUrl: string;
}
const UpdateProfile: React.FC<IProps> = ({ handleEditable, user, imageUrl }) => {
    const isTabletOrMobileDevice = useMediaQuery({
        query: "(max-device-width: 1224px)",
    });
    const {
        register,
        handleSubmit,
        formState: { errors, isDirty },
    } = useForm<IProfileUpdate>();
    const { updateProfile } = useContext(RootStoreContext).userStore;
    const [submitting, setSubmitting] = useState(false);
    const onSubmitHandler = (data: IProfileUpdate) => {
        setSubmitting(true);
        updateProfile(data).then(() => {
            setSubmitting(false);
            handleEditable();
        })
        console.log(data);

    }
    const errorStyle = {
        color: "red",
        font: "bold"
    }
    return (
      <>
        <div className="profile-margin">
          <div>
            <Button style={{width: '10%', borderRadius: '50%'}} color="black" onClick={() => handleEditable()}>
              <FontAwesomeIcon icon={faArrowLeft} />
            </Button>
          </div>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            {!isTabletOrMobileDevice ? (
              <div>
                <div className="profile-imagecontainer">
                  <div className="profile-image">
                    <Image
                      src={imageUrl + user?.profileImage}
                      size="medium"
                      circular
                    />
                    <input
                      id="images"
                      type="file"
                      {...register("profileImage", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  {errors.profileImage && (
                    <span style={errorStyle}>
                      {errors.profileImage[0]?.text}
                    </span>
                  )}
                </div>
                <div className="oldp-container">
                  <div className="oldp">
                    <input
                      defaultValue={user.fullname.split(" ")[0]}
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                      placeholder="First Name"
                    />
                  </div>
                  {errors.firstName && (
                    <span style={errorStyle}>{errors.firstName.message}</span>
                  )}
                </div>
                <div className="oldp-container">
                  <div className="oldp">
                    <input
                      defaultValue={user.fullname.split(" ")[1]}
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                      placeholder="Last Name"
                    />
                  </div>
                  {errors.lastName && (
                    <span style={errorStyle}>{errors.lastName?.message}</span>
                  )}
                </div>
                <div className="oldp-container">
                  <div className="oldp">
                    <input
                      defaultValue={user.address}
                      {...register("address", {
                        required: "Address  is required",
                      })}
                      placeholder="Address"
                    />
                  </div>
                  {errors.address && (
                    <span style={errorStyle}>{errors.address?.message}</span>
                  )}
                </div>
                <div className="oldp-container">
                  <div className="oldp">
                    <input
                      defaultValue={user.email}
                      {...register("email", { required: "Email is required" })}
                      placeholder="Email"
                    />
                  </div>
                  {errors.email && (
                    <span style={errorStyle}>{errors.email?.message}</span>
                  )}
                </div>
                <div className="oldp-container">
                  <div className="oldp">
                    <input
                      defaultValue={user.nid}
                      {...register("nid", { required: "NID is required" })}
                      placeholder="NID"
                    />
                  </div>
                  {errors.nid && (
                    <span style={errorStyle}>{errors.nid?.message}</span>
                  )}
                </div>
                <div className="oldp-container">
                  <Button
                    style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                    action="submit"
                    loading={submitting}
                    disabled={!isDirty}
                  >
                    Update
                  </Button>
                </div>
              </div>
            ) : (
              <div>
                <div className="profile-imagecontainer">
                  <div className="profile-image">
                    <Image
                      src={imageUrl + user?.profileImage}
                      size="medium"
                      circular
                    />
                    <input
                      id="images"
                      type="file"
                      {...register("profileImage", {
                        required: "This field is required",
                      })}
                    />
                  </div>
                  {errors.profileImage && (
                    <span style={errorStyle}>
                      {errors.profileImage[0]?.text}
                    </span>
                  )}
                </div>
                <div className="oldp-container">
                  <div className="oldpm">
                    <input
                      defaultValue={user.fullname.split(" ")[0]}
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="oldp-container">
                  <div className="oldpm">
                    <input
                      defaultValue={user.fullname.split(" ")[1]}
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="oldp-container">
                  <div className="oldpm">
                    <input
                      defaultValue={user.address}
                      {...register("address", {
                        required: "Address  is required",
                      })}
                      placeholder="Address"
                    />
                  </div>
                </div>
                <div className="oldp-container">
                  <div className="oldpm">
                    <input
                      defaultValue={user.email}
                      type="email"
                      {...register("email", { required: "Email is required" })}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="oldp-container">
                  <div className="oldpm">
                    <input
                      defaultValue={user.nid}
                      {...register("nid", { required: "NID is required" })}
                      placeholder="NID"
                    />
                  </div>
                </div>
                <div className="oldp-containerm">
                  <Button
                    style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                    action="submit"
                    disabled={!isDirty}
                  >
                    Update
                  </Button>
                </div>
              </div>
            )}
          </form>
        </div>
      </>
    );
}

export default observer(UpdateProfile)
