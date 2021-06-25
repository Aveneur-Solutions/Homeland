import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useMediaQuery } from 'react-responsive';
import { Button } from 'semantic-ui-react'
import { IUserChangePassword } from '../../models/user';
import ErrorSpan from './ErrorSpan';
interface IProps {
    changePassword: (body: IUserChangePassword) => Promise<void>,
    handleChangePassword : () => void
}
const ChangePasword: React.FC<IProps> = ({ changePassword ,handleChangePassword}) => {
    const isTabletOrMobileDevice = useMediaQuery({
        query: "(max-device-width: 1224px)",
    });
    const { register, handleSubmit, formState: { errors,isDirty }, } = useForm<IUserChangePassword>();
    const onChangePass = (data: IUserChangePassword) => {
        setLoading(true);
        changePassword(data).then(() =>{           
            handleChangePassword();
            setLoading(false);
        });
    };
   
    const [loading,setLoading] = useState(false);
    return (
        <div className="profile-margin">
            <div>
                <Button color="black" onClick={()=> handleChangePassword()}>Back</Button>
            </div>
            <div className="profile-imageheadcontainer">
                <h2>Change Password</h2>
            </div>
            <form onSubmit={handleSubmit(onChangePass)}>
                <div className="oldp-container">
                    {!isTabletOrMobileDevice ? (
                        <div className="oldp">
                            <input id="oldpInput" type="password" placeholder="Old Password" {...register("oldPassword", { required: true })} />
                            {errors.oldPassword && <ErrorSpan content="Old password is required"/>}
                        </div>
                    ) : (
                        <div className="oldpm">
                            <input id="oldpInput" type="password" placeholder="Old Password" {...register("oldPassword", { required: true })} />
                            {errors.oldPassword && <ErrorSpan content="Old password is required"/>}
                        </div>
                    )}
                </div>
                <div className="oldp-container">
                    {!isTabletOrMobileDevice ? (
                        <div className="oldp">
                            <input id="oldpInput" type="password" placeholder="New Password" {...register("newPassword", { required: true })} />
                            {errors.newPassword && <ErrorSpan content="New password is required"/>}
                        </div>
                    ) : (
                        <div className="oldpm">
                            <input id="oldpInput" type="password" placeholder="New Password" {...register("newPassword", { required: true })} />
                            {errors.newPassword && <ErrorSpan content="New password is required"/>}
                        </div>
                    )}
                </div>
                {!isTabletOrMobileDevice ? (
                    <div className="oldp-container">
                        <Button
                            style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                            action="submit"
                            loading={loading}
                            disabled={!isDirty}
                        >
                            Change Password
                        </Button>
                    </div>
                ) : (
                    <div className="oldp-containerm">
                        <Button
                            style={{ backgroundColor: "#1e212d", color: "goldenrod" }}
                            action="submit"
                            loading={loading}
                            disabled={!isDirty}
                        >
                            Change Password
                        </Button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default ChangePasword
