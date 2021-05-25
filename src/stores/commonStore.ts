import { action, makeObservable, observable, reaction, runInAction } from "mobx";
import agent from "../api/agent";
import { IImage } from "../models/image";
import { RootStore } from "./rootStore";

export default class CommonStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeObservable(this);

    reaction(
      () => this.token,
      (token) => {
        if (token) {
          localStorage.setItem("jwt", token);
        } else {
          localStorage.removeItem("jwt");
        }
      }
    );
  }
  @observable galleryImages: IImage[] = [];
  @observable homeImages: IImage[] = [];
  @observable projectImages: IImage[] = [];
  @observable token = localStorage.getItem("jwt");
  @observable showOverview = true;
  @observable showLocation = false;
  @observable showGallery = false;


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
  @action setToken = (token: string) => {
    localStorage.setItem("jwt", token);
    this.token = token;
  };

  @action removeToken = () => {
    localStorage.removeItem("jwt");
    this.token = null;
  };
  @action listAllImages = async () => {
    try {
      const images = await agent.Gallery.getAllImages();
      runInAction(() => {
        this.galleryImages = images.filter(
          (image) => image.section === "gallery"
        );
        this.homeImages = images.filter((image) => image.section === "home");
        this.projectImages = images.filter(
          (image) => image.section === "projects"
        );
        console.log(this.galleryImages)
      });
    } catch (error) {
      console.log(error);
    }
  };
}
