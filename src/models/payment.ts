export interface IPaymentRequest {
    orderId: string;
    successUrl: string;
    failedUrl:string;
}
export interface IPaymentResponse {
    status: string;
    gatewayPageURL: string;
    failedReason: string;
}