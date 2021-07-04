import { action, makeObservable, observable, runInAction } from "mobx";
import agent from "../api/agent";
import { IBuilding } from "../models/building";
import { RootStore } from "./rootStore";

export default class ProjectStore {
    rootStore: RootStore
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        makeObservable(this);
    }
     @observable buildingList : IBuilding[] = [];
     @observable showNothing = true;
     @observable showImage =false;
     @observable currentBuilding : IBuilding | null = null;
     
     @action setImageVisibility = () => {
         this.showNothing = false;
         this.showImage = true;
         
     }
     @action setNothingVisibility = () => {
         this.showNothing = true;
         this.showImage = false;
     }
     @action getBuildingList = async () => {
       
       try{
        var buildings =await agent.Building.list();
        runInAction(() => {
            this.buildingList = buildings;
            console.log(this.buildingList);
        })
       } catch(error)
       {
           console.log(error);
       }
     }
     @action setCurrentBuilding = (building : IBuilding) => {
       this.currentBuilding = building;
     }
     @action emptyCurrentBuilding = () => {
         this.currentBuilding = null
     }
}