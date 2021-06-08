import axios, { AxiosResponse } from "axios";
import { history } from "..";
import { IImage } from "../models/image";
import ITransfer, { ITransferPost } from "../models/transfer";
import IFlat from "../models/unit";
import { toast } from "react-toastify";
import IUser, {
  IUserChangePassword,
  IUserLogin,
  IUserLoginWithOtp,
  IUserRegister,
  IUserSearch,
} from "../models/user";
import { IPaymentRequest, IPaymentResponse } from "../models/payment";
import { IOrder, IOrderCancel, IOrderResponse } from "../models/order";


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

axios.interceptors.response.use(undefined, (error) => {
  if (error.message === "Network Error" && !error.response) {
    toast.error("Network error -- make sure API server is running");
    console.log(error);
  }
  console.log(error);
  const { status, data, config } = error;
  
  if (
    error.status === 401 
  ) {
    console.log(data.errors)
  }
  if (status === 500) {
    toast.error("Server Error Check the terminal for more info");
  }
  throw error.response;
});

// axios.defaults.baseURL = "https://www.homeland.aveneur.com/api";
axios.defaults.baseURL = "https://localhost:5001/api";

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
  getUser : (data : IUserSearch) : Promise<IUser> => request.get(`/user/${data.phoneNumber}`),
  register: (body: IUserRegister) => request.post("/user/register", body),
  registerWithOtp: (body: IUserLoginWithOtp): Promise<IUser> =>
    request.post("/user/registerWithOtp", body),
  changePassword: (body: IUserChangePassword) : Promise<IUser> => request.post("/user/changePassword", body),
  myBookings : () : Promise<IFlat[]> => request.get("/Customer/myBookings"),
  myAllotments : () : Promise<IFlat[]> => request.get("/Customer/myAllotments"),
  myTransfers : () : Promise<ITransfer[]> => request.get("/Customer/myTransfers"),
  transferNow : (body : ITransferPost) => request.post("flat/TransferNow",body),
  placeOrder : (body : IOrder) : Promise<IOrderResponse> => request.post("flat/placeOrder",body),
  cancelOrder : (body : IOrderCancel)  => request.del(`flat/cancelOrder/${body.orderId}`),
  payment : (body : IPaymentRequest) : Promise<IPaymentResponse> => request.post("Payment/Payment",body)
};

const Flat = {
  list: (): Promise<IFlat[]> => request.get("/flat"),
  featuredList: (): Promise<IFlat[]> => request.get("/flat"),
  book: (idBody: { flatIds: string[] }) =>
    request.post("/flat/bookNow", idBody),
};
const Gallery = {
  getAllImages: (): Promise<IImage[]> => request.get("/Adminstrator/Images")
}

const agent = { User, Flat, Gallery };

export default agent;
