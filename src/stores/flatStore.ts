import { action, makeObservable, observable, runInAction } from "mobx";
import agent from "../api/agent";
import IFlat from "../models/unit";
import { RootStore } from "./rootStore";

export default class FlatStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable flat: IFlat | null = null;
  @observable flats: IFlat[] = [];
  @observable featuredFlats: IFlat[] = [];

  @action listfeatured = async() => {
    try {
        const flat = await agent.Flat.featuredList();  
        runInAction(() => {
            this.featuredFlats = flat;
        })
    } catch (error) {
        console.log(error);
    }
  }
}
