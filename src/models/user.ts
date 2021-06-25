export interface IUserLogin {
  phoneNumber: string;
  password: string;
}

export interface IUserLoginWithOtp {
  phoneNumber: string;
  otp: string;
}

export default interface IUser {
  phoneNumber: string;
  token: string;
  fullname: string;
  email : string;
  address : string;
  nid : string;
  profileImage : string;
}
export interface IProfileUpdate{
  firstName: string;
  lastName: string;
  email : string;
  address : string;
  nid : string;
  profileImage : File[];
}
export interface IUserSearch{
  phoneNumber: string;
}
export interface IUserRegister {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
}

export interface IUserChangePassword{
  oldPassword: string;
  newPassword: string;
}