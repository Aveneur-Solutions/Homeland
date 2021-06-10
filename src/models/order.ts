import IFlat from "./unit";

export interface IOrder{
    orderId : string;
    flatIds : string[];
    amount : number
}
export interface IOrderResponse{
    transactionID : string
}
export interface IOrderCancel{
    orderId : string
}

export interface IOrderDetails{
    flats : IFlat[],
    amount : number,
    totalUnits : number,
    orderId : string
}