import { action, makeObservable, observable } from "mobx";
import { createContext } from "react";

class ProjectStore{
    constructor(){
        makeObservable(this);
    }
    @observable showNothing = true;
    @observable showImage =false;
    
    
    @action setImageVisibility = () => {
        this.showNothing = false;
        this.showImage = true;
        
    }
    @action setNothingVisibility = () => {
        this.showNothing = true;
        this.showImage = false;
    }
}

export default createContext(new ProjectStore());

