import { action, makeObservable, observable } from "mobx";
import { RootStore } from "./rootStore";

export default class NavStore {
    rootStore: RootStore
    constructor(rootStore: RootStore) {
        this.rootStore = rootStore
        makeObservable(this);
    }

    @observable logginIn = false;
    @observable booking = false;

    @action normalLogin = () => {
        this.logginIn = true;
        this.booking = false;
    }

    @action bookingLogin = () => {
        this.booking = true;
        this.logginIn = false;
    }

    @action loginDone = () => {
        this.logginIn = false;
        this.booking = false;
    }
}