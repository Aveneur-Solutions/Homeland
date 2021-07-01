import { action, makeObservable, observable, runInAction } from "mobx";
import { toast } from "react-toastify";
import agent from "../api/agent";
import { ITransferPost } from "../models/transfer";
import IFlat from "../models/unit";
import { RootStore } from "./rootStore";
import { history } from "../";
import { IOrder, IOrderCancel, IOrderDetails } from "../models/order";

export default class FlatStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);
  }

  @observable flat: IFlat | null = null;
  @observable flats: IFlat[] = [];
  @observable selectedFlats: IFlat[] = [];
  @observable cartItems: IFlat[] = [];
  @observable totalAmount: number = 0;
  @observable cartItemCount = 0;
  @observable orderId: string = "";
  @observable orderPlaced: boolean = false;
  @observable orderDetails: IOrderDetails | null = null;
  @observable similarUnits: IFlat[] = [];

  getAverageSize = (array: IFlat[]) => {
    let sumOfSize = 0;
    array.forEach((flat) => {
      sumOfSize = sumOfSize + flat.size;
    });
    return sumOfSize / this.selectedFlats.length;
  }

  @action listSimilarUnits = () => {
    let avgSize = this.getAverageSize(this.selectedFlats)
    let simUnits = this.flats.filter(
      (flat) => flat.size <= avgSize + 50 && flat.size >= avgSize - 50
    );
    console.log(simUnits)
    this.similarUnits = simUnits.slice(0,3)
    console.log(this.similarUnits)
  };

  @action initCart = () => {
    const cartItems = localStorage.getItem("userCart");
    if (cartItems) this.cartItems = JSON.parse(cartItems);
    this.cartItemCount = this.cartItems.length;
    this.cartItems.forEach((element) => {
      this.totalAmount = this.totalAmount + element.bookingPrice;
    });
    if (this.cartItemCount === 0) this.unpaidOrder();
    setTimeout(() => {
      this.emptyCart();
    }, 5000);
  };

  @action listflats = async () => {
    try {
      const flats = await agent.Flat.list();
      runInAction(() => {
        this.flats = flats.filter((x) => !x.isBooked && !x.isSold);
      });
    } catch (error) {
      console.log(error);
    }
  };

  @action selectFlats = (flat: IFlat) => {
    const temp = this.selectedFlats.filter((x) => x.id === flat.id)[0];
    if (!temp) this.selectedFlats.push(flat);
  };

  @action viewFlatDetails = (flat: IFlat) => {
    this.selectFlats(flat);
    history.push("/mainInfo");
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
    setTimeout(() => {
      this.emptyCart();
    }, 300000); //300000
  };

  @action addToCart = (flat: IFlat) => {
    let exists = this.cartItems.some((item) => item.id === flat.id);
    if (exists) return;
    if (this.cartItems.length < 4) {
      this.cartItems.push(flat);
      this.cartItemCount = this.cartItemCount + 1;
      this.totalAmount = this.totalAmount + flat.bookingPrice;
      if (!this.orderPlaced) {
        this.saveCart();
        toast.success("Added to cart");
      }
    } else {
      toast.error("You can not book more than 4 units");
    }
  };

  @action removeFromCart = (flat: IFlat) => {
    let temp = this.cartItems.slice();
    const index = temp.indexOf(flat);
    temp.splice(index, 1);
    this.cartItems = temp;
    this.cartItemCount = this.cartItemCount - 1;
    this.totalAmount = this.totalAmount - flat.bookingPrice;
    this.saveCart();
  };

  @action emptyCart = () => {
    this.cartItems = [];
    this.cartItemCount = 0;
    this.totalAmount = 0;
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

  @action transferNow = async (data: ITransferPost) => {
    try {
      await agent.User.transferNow(data);
      toast.success("Transfer Complete");
      history.push("/my-bookings");
    } catch (error) {
      console.log(error);
      toast.error(error.data.errors.error);
    }
  };

  @action placeOrder = async () => {
    var flatIds = this.cartItems.map((x) => x.id);
    var order: IOrder = {
      orderId: Date.now().toString(),
      amount: this.totalAmount,
      flatIds: flatIds,
    };
    this.orderId = order.orderId;
    console.log(order);
    try {
      await agent.User.placeOrder(order);
      runInAction(() => {
        this.orderPlaced = true;
        localStorage.removeItem("userCart");
        toast.success("Order placed successfully");
      });
      console.log(order);
    } catch (error) {
      toast.error(error.data.errors.error);
    }
  };

  @action cancelOrder = async () => {
    var orderCancel: IOrderCancel = {
      orderId: this.orderId,
    };
    try {
      await agent.User.cancelOrder(orderCancel);
      runInAction(() => {
        this.orderPlaced = false;
        this.emptyCart();
        toast.success("Order was cancelled successfully");
      });
    } catch (error) {
      console.log(error);
      // toast.error(error.data.errors.error);
    }
  };

  @action unpaidOrder = async () => {
    try {
      var order = await agent.User.unpaidOrder();
      runInAction(() => {
        if (order.flats) {
          this.orderDetails = order;
          this.orderPlaced = true;
          this.orderId = order.orderId;
          order.flats.forEach((flat) => {
            this.addToCart(flat);
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
}
