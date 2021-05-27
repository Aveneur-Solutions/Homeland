  
export default interface ITransfer{
    flatId : string;
    transferredFrom : string;
    transferredTo : string;
    transferDate : Date;
}
export interface ITransferPost{
    password : string;
    flatIds :  string[];
    recieverPhoneNumber : string | undefined;
}