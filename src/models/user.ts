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
  fullName: string;
}

export default interface IUserRegister {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
}