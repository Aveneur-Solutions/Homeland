import IFlat from "./unit";

export interface IBuilding{
    buildingNumber : string;
    image : string;
    flats : IFlat[]
}