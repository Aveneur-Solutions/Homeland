import { createContext } from "react";
import CommonStore from "./commonStore";
import NavStore from "./navStore";
import UserStore from "./userStore";

export class RootStore {
  userStore: UserStore;
  commonStore: CommonStore;
  navStore: NavStore
  constructor() {
    this.userStore = new UserStore(this);
    this.commonStore = new CommonStore(this);
    this.navStore = new NavStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
