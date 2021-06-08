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