export interface IBaseRequestOptions {
    hsn: string;
    merchantId?: string;
}
export interface IListTerminalsResponse {
    terminals: Array<string>;
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
    amount?: number;
    includeSignature?: boolean;
    includeAmountDisplay?: boolean;
    beep?: boolean;
    aid?: string;
    includeAVS?: boolean;
    capture?: boolean;
    orderId?: string;
    userFields?: Object;
    clearDisplayDelay?: number;
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
export interface IAuthManualRequestOptions extends IBaseRequestOptions {
    authMerchantId: string;
    amount: number;
    includeSignature: boolean;
    includeAmountDisplay: boolean;
    beep: boolean;
    includeAVS: boolean;
    includeCVV: boolean;
    capture: boolean;
    gzipSignature: boolean;
    orderId: string;
    clearDisplayDelay: number;
}
export interface IAuthManualResponse {
    token: string;
    expiry: string;
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
}
export interface ICardConnectError {
    errorCode: number;
    errorMessage: string;
}
