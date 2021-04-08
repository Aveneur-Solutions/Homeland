import { createContext } from "react";
import CommonStore from "./commonStore";
import UserStore from "./userStore";
import FlatStore from "./flatStore";

export class RootStore {
  userStore: UserStore;
  commonStore: CommonStore;
  flatStore: FlatStore;
  
  constructor() {
    this.userStore = new UserStore(this);
    this.commonStore = new CommonStore(this);
    this.flatStore = new FlatStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
