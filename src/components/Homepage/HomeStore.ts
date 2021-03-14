import { action, observable } from "mobx";
import { createContext } from "react";

class HomeStore{
    @observable showOverview = false;
    @observable showLocation =false;
    @observable showGallery =false;
    
    @action setOverviewVisibility = () => {
        this.showOverview = true;
        this.showLocation = false;
        this.showGallery = false;
    }
    @action setLocationVisibility = () => {
        this.showOverview = false;
        this.showLocation = true;
        this.showGallery = false;
    }
    @action setGalleryVisibility = () => {
        this.showOverview = false;
        this.showLocation = false;
        this.showGallery = true;
    }
}

export default createContext(new HomeStore);

