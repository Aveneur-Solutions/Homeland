import { createContext } from "react";
import CommonStore from "./commonStore";
import NavStore from "./navStore";
import UserStore from "./userStore";
import FlatStore from "./flatStore";

export class RootStore {
  userStore: UserStore;
  commonStore: CommonStore;
  navStore: NavStore;
  flatStore: FlatStore;
  
  constructor() {
    this.userStore = new UserStore(this);
    this.commonStore = new CommonStore(this);
    this.navStore = new NavStore(this);
    this.flatStore = new FlatStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
