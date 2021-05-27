import { action, makeObservable, observable, runInAction } from "mobx";
import { toast } from "react-toastify";
import { history } from "..";
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
  @observable cartItemCount = 0;

  @action initCart = () => {
    const cartItems = localStorage.getItem("userCart");
    if (cartItems) this.cartItems = JSON.parse(cartItems);
    this.cartItemCount = this.cartItems.length;
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
    localStorage.setItem("userCart", JSON.stringify(this.cartItems));
  };

  @action addToCart = (flat: IFlat) => {
    let exists = this.cartItems.some((item) => item.id === flat.id);
    if (exists) return;
    this.cartItems.push(flat);
    this.cartItemCount = this.cartItemCount + 1;
    this.saveCart();
    toast.success("Added to cart");
  };

  @action removeFromCart = (flat: IFlat) => {
    let temp = this.cartItems.slice();
    const index = temp.indexOf(flat);
    temp.splice(index, 1);
    this.cartItems = temp;
    this.cartItemCount = this.cartItemCount - 1;
    this.saveCart();
  };

  @action emptyCart = () => {
    this.cartItems = [];
    this.cartItemCount = 0;
    localStorage.removeItem("userCart");
  };

  @action bookFlat = async () => {
    const user = this.rootStore.userStore.user;
    if (user) {
      const idArray: string[] = [];
      this.cartItems.forEach((item) => idArray.push(item.id));
      try {
        const idBody = {
          flatIds: idArray,
        };
        await agent.Flat.book(idBody);
        toast.success("Booking order has been placed");
        this.emptyCart();
      } catch (error) {
        console.log(error);
        toast.error(`An error occured: ${error.data.errors.error}`);
      }
    } else {
      this.rootStore.navStore.bookingLogin();
      history.push("/login");
    }
  };
}
