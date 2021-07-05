import { action, makeObservable, observable, runInAction } from "mobx";
import { toast } from "react-toastify";
import agent from "../api/agent";
import { IPaymentRequest } from "../models/payment";
import ITransfer from "../models/transfer";
import IFlat from "../models/unit";
import IUser, {
  IUserLogin,
  IUserLoginWithOtp,
  IUserRegister,
  IUserSearch,
  IUserChangePassword,
  IProfileUpdate,
} from "../models/user";
import { RootStore } from "./rootStore";

export default class UserStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable user: IUser | null = null;
  @observable recieverUser : IUser | null = null;
  @observable myBookedFlats : IFlat[] = [];
  @observable myAllottedFlats : IFlat[] = [];
  @observable myTransfers : ITransfer[] = [];
  @observable transferrableFlats : IFlat[] = [];
  @observable baseImageUrl = "https://www.homeland.aveneur.com/Images";
  @action login = async (body: IUserLogin) => {
    try {
      await agent.User.login(body);
    } catch (error) {
      throw error;
    }
  };

  @action loginWithOtp = async (body: IUserLoginWithOtp) => {
    try {
      const user = await agent.User.loginWithOtp(body);
      runInAction(() => {
        this.user = user;
        this.rootStore.commonStore.setToken(user.token);
      });
    } catch (error) {
      throw error;
    }
  };

  @action getUser = async () => {
    try {
      const user = await agent.User.currentUser();
      runInAction(() => {
        this.user = user;
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action logout = () => {
    this.rootStore.commonStore.removeToken();
    this.user = null;
  };

  @action registration = async (body: IUserRegister) => {
    try {
     const result = await agent.User.register(body);
     console.log(result);
    } catch (error) {
      console.log(error.data.errors.error);
      throw error;
    }
  };

  @action registerWithOtp = async (body: IUserLoginWithOtp) => {
    try {
      const user = await agent.User.registerWithOtp(body);
      runInAction(() => {
        this.user = user;
        this.rootStore.commonStore.setToken(user.token);
      });
    } catch (error) {
      console.log(error);
    }
  };
  @action updateProfile = async (body : IProfileUpdate) => {
    try{
      await agent.User.updateProfile(body);
      toast.success("Profile Updated");
    }catch(error)
    {
      console.log(error);
    }
    
  }
  @action changePassword = async (body: IUserChangePassword) => {
    try {
      await agent.User.changePassword(body);
      toast.success("Password Updated!");
    } catch (error) {
      toast.error(error.data.errors.error);
      console.log(error);
    }
  };
  @action resendOtp = async (phoneNo: string) => {
    try {
      const body = {
        phoneNumber: phoneNo,
      };
      await agent.User.resendOtp(body);
    } catch (error) {
      throw error;
    }
  };
  @action resetPassword = async (body: {newPassword: string}) => {
    try {
      await agent.User.resetPassword(body)
    } catch (error) {
      throw error
    }
  }

  @action getMyBookedFlats = async () => {
    try{
     const bookedFlats =  await agent.User.myBookings();
     runInAction(() => {
       this.myBookedFlats = bookedFlats;
       this.transferrableFlats = bookedFlats.filter(x => !x.isAlreadyTransferred && !x.isSold);
       console.log(this.transferrableFlats)
     }) 
    }catch(error)
    {
      console.log(error)

    }
  };
  @action getMyAllottedFlats = async () => {
    try {
      const allottedFlats = await agent.User.myAllotments();
      runInAction(() => {
        this.myAllottedFlats = allottedFlats;
      });
    } catch (error) {
      console.log(error);
    }
  };
  @action getMyTransfers = async () => {
    try {
      const transfers = await agent.User.myTransfers();
      runInAction(() => {
        this.myTransfers = transfers;
      });
    } catch (error) {
      console.log(error);
    }
  };
  @action searchUser = async (data: IUserSearch) => {
    try {
      this.emptyRecieverUser();
      // console.log(data.phoneNumber.slice(0,3))
      data.phoneNumber = data.phoneNumber.slice(0,3) === "+88" ?data.phoneNumber.slice(3,14) : data.phoneNumber;
      const user = await agent.User.getUser(data);
      runInAction(() => {
        if (this.user?.phoneNumber !== user.phoneNumber) {
          this.recieverUser = user;
          console.log(user);
        } else toast.error("It's your number");
      });
    } catch (error) {
      toast.error("No user exists with this number, please ask the recipient to register.");
      console.log(error);
    }
  };
  @action emptyRecieverUser = () => {
    this.recieverUser = null;
  };
  @action makePayment = async () => {

    let paymentRequest : IPaymentRequest = {
      orderId : this.rootStore.flatStore.orderId,
      successUrl : window.location.origin.concat("/#/my-bookings"),
      failedUrl : window.location.origin.concat("/#/failedPayment")
    }

    console.log(paymentRequest);
    try{
      var response =  await agent.User.payment(paymentRequest);
      if(response.status === "SUCCESS") {
        window.location.replace(response.gatewayPageURL);
        console.log(response)
      }
      else toast.error(response.status+"=>"+response.failedReason)
    }catch(error)
    {
      toast.error(error.data.errors.error)
      console.log(paymentRequest.orderId)
    }
  }
}
