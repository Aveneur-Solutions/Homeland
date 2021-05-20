import { action, makeObservable, observable } from "mobx";
import { createContext } from "react";

class ProjectStore {
  constructor() {
    makeObservable(this);
  }
  @observable showCard = true;
  @observable filterCardPrice = false;
  @observable filterCardSize = false;
  // @observable startingPrice = 0;
  // @observable endingprice = 0;
  //  @observable featuredUnit : [] = null;

  @action setPriceFilter = () => {
    this.showCard = false;
    this.filterCardPrice = true;
    this.filterCardSize = false;
  };
  @action setSizeFilter = () => {
    this.showCard = false;
    this.filterCardPrice = false;
    this.filterCardSize = true;
  };
  // @action returnFUnit = () => {}
}

export default createContext(new ProjectStore());