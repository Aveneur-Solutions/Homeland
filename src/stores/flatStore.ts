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
  @observable selectedFlats: IFlat[] = [];

  @action listflats = async() => {
    try {
        const flats = await agent.Flat.list();  
        runInAction(() => {
            this.flats = flats;
        })
    } catch (error) {
        console.log(error);
    }
  }

  @action selectFlats = (flat: IFlat) => {
    this.selectedFlats.push(flat);
  };

  @action unselectFlats = (flat: IFlat) => {
    let temp = this.selectedFlats.slice();
    const index = temp.indexOf(flat);
    temp.splice(index, 1);
    this.selectedFlats = temp;
  };

  @action clearSelectedFlats = () => {
    this.selectedFlats = [];
  };
}
