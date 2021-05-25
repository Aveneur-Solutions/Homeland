import { action, makeObservable, observable, runInAction } from "mobx";
import agent from "../api/agent";
import ITransfer from "../models/transfer";
import IFlat from "../models/unit";
import IUser, {
  IUserLogin,
  IUserLoginWithOtp,
  IUserRegister,
  IUserChangePassword,
} from "../models/user";
import { RootStore } from "./rootStore";

export default class UserStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable user: IUser | null = null;
  @observable myBookedFlats : IFlat[] = [];
  @observable myAllottedFlats : IFlat[] = [];
  @observable myTransfers : ITransfer[] = [];
  @action login = async (body: IUserLogin) => {
    try {
      await agent.User.login(body);
    } catch (error) {
      console.log(error);
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
      await agent.User.register(body);
    } catch (error) {
      console.log(error);
    }
  };

  @action registerWithOtp = async (body: IUserLoginWithOtp) => {
    try {
      const user = await agent.User.registerWithOtp(body);
      runInAction(() => {
        this.user = user;
        this.rootStore.commonStore.setToken(user.token);
      })
    } catch (error) {
      console.log(error)
    }
  }

  @action changePassword = async (body: IUserChangePassword) => {
    try{
      await agent.User.changePassword(body);
    }catch(error){
      console.log(error)
    }
  }

  @action getMyBookedFlats = async () => {
    try{
     const bookedFlats =  await agent.User.myBookings();
     runInAction(() => {
       this.myBookedFlats = bookedFlats;
     }) 
    }catch(error)
    {
      console.log(error)
    }
  }
  @action getMyAllottedFlats = async () => {
    try{
     const allottedFlats =  await agent.User.myAllotments();
     runInAction(() => {
       this.myAllottedFlats = allottedFlats;
     }) 
    }catch(error)
    {
      console.log(error)
    }
  }
  @action getMyTransfers = async () => {
    try{
     const transfers =  await agent.User.myTransfers();
     runInAction(() => {
       this.myTransfers = transfers;
     }) 
    }catch(error)
    {
      console.log(error)
    }
  }
}
