export interface IBaseRequestOptions {
    hsn: string;
    merchantId?: string;
}
export interface IPingResponse {
    connected: boolean;
}
export interface IConnectRequestOptions extends IBaseRequestOptions {
    token?: string;
    force?: boolean;
}
export interface IConnectResponse {
    sessionKey: string;
    statusCode: number;
}
export interface IDisconnectResponse {
    disconnected: boolean;
}
export interface IReadInputRequestOptions extends IBaseRequestOptions {
    prompt: string;
    format: string;
    beep?: boolean;
}
export interface IReadInputResponse {
    input: string;
}
export interface IAuthCardRequestOptions extends IBaseRequestOptions {
    amount?: string;
    includeSignature?: string;
    includeAmountDisplay?: string;
    beep?: string;
    aid?: string;
    includeAVS?: string;
    capture?: string;
    orderId?: string;
    userFields?: Object;
    clearDisplayDelay?: string;
}
export interface IAuthCardResponse {
    token: string;
    expiry: string;
    name: string;
    signature: string;
    batchid: string;
    retref: string;
    avsresp: string;
    respproc: string;
    amount: string;
    resptext: string;
    authcode: string;
    respcode: string;
    merchid: string;
    cvvresp: string;
    respstat: string;
    tokenExpired: boolean;
}
export interface ICardConnectError {
    errorCode: number;
    errorMessage: string;
}
