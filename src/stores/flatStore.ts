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
  @observable cartItems: IFlat[] = [];

  @action initCart = async () => {
    this.cartItems = [];
    const token = this.rootStore.commonStore.token;
    if (token) {
      this.rootStore.userStore.getUser().then(() => {
        const user = this.rootStore.userStore.user;
        const cartItems = localStorage.getItem(
          user ? `${user.phoneNumber}` : "userCart"
        );
        if (cartItems) this.cartItems = JSON.parse(cartItems);
        console.log(cartItems)
      });
    } else {
      const cartItems = localStorage.getItem("userCart");
      if (cartItems) this.cartItems = JSON.parse(cartItems);
    }
  };

  @action listflats = async () => {
    try {
      const flats = await agent.Flat.list();
      runInAction(() => {
        this.flats = flats;
      });
    } catch (error) {
      console.log(error);
    }
  };

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

  saveCart = () => {
    const user = this.rootStore.userStore.user;
    localStorage.setItem(
      user ? `${user.phoneNumber}` : "userCart",
      JSON.stringify(this.cartItems)
    );
  };

  @action addToCart = (flat: IFlat) => {
    let exists = this.cartItems.some((item) => item.id === flat.id);
    if (exists) return;
    this.cartItems.push(flat);
    this.saveCart();
  };

  @action removeFromCart = (flat: IFlat) => {
    let temp = this.cartItems.slice();
    const index = temp.indexOf(flat);
    temp.splice(index, 1);
    this.cartItems = temp;
    this.saveCart();
  };

  @action emptyCart = () => {
    const user = this.rootStore.userStore.user;
    if (user) localStorage.removeItem(`${user.phoneNumber}`);
    else localStorage.removeItem("userCart");
  };
}
