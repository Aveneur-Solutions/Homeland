import axios, { AxiosResponse } from "axios";
import { IImage } from "../models/image";
import IFlat from "../models/unit";
import IUser, {
  IUserLogin,
  IUserLoginWithOtp,
  IUserRegister,
} from "../models/user";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.defaults.baseURL = "https://www.homeland.aveneur.com/api";
// axios.defaults.baseURL = "http://localhost:5000/api";

const responseBody = (response: AxiosResponse) => response.data;

const request = {
  get: (url: string) => axios.get(url).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(responseBody),
  del: (url: string) => axios.delete(url).then(responseBody),
};

const User = {
  login: (body: IUserLogin) => request.post("/user/login", body),
  loginWithOtp: (body: IUserLoginWithOtp): Promise<IUser> =>
    request.post("/user/loginWithOtp", body),
  currentUser: (): Promise<IUser> => request.get("/user"),
  register: (body: IUserRegister) => request.post("/user/register", body),
  registerWithOtp: (body: IUserLoginWithOtp): Promise<IUser> =>
    request.post("/user/registerWithOtp", body),
};

const Flat = {
  list: (): Promise<IFlat[]> => request.get("/flat"),
  featuredList: (): Promise<IFlat[]> => request.get("/flat"),
};
const Gallery = {
  getAllImages: (): Promise<IImage[]> => request.get("/Adminstrator/Images")
}

const agent = { User, Flat, Gallery };

export default agent;
