export interface IBaseRequestOptions {
  hsn: string;
  merchantId?: string;
}

export interface IListTerminalsResponse {
  terminals: Array<string>
}

export interface IDateTimeRequestOptions extends IBaseRequestOptions {
  dateTime: string;
}

export interface IPanPadResponse {
  version: string;
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

export interface IPreConnectResponse {
  statusCode: number;
}

export interface IDisconnectResponse {
  disconnected: boolean
}

export interface IDisplayRequestOptions extends IBaseRequestOptions {
  text: string;
}

export interface IDisplayResponse {
  success: boolean;
}

export interface IClearDisplayResponse {
  success: boolean;
}

export interface IReadConfirmationRequestoptions extends IBaseRequestOptions {
  prompt: string;
  beep: boolean;
}

export interface IReadConfirmationResponse {
  confirmed: boolean;
}

export interface IReadInputRequestOptions extends IReadConfirmationRequestoptions {
  format: string;
}

export interface IReadInputResponse {
  input: string;
}

export interface IReadSignatureRequestOptions extends IBaseRequestOptions {
  prompt: string;
  gzipSignature: boolean;
  signatureFormat: string;
  signatureImageType: string;
  signatureDimensions: string;
}

export interface IReadSignatureResponse {
  signature: string;
}

export interface ICancelResponse {
  cancelled: boolean
}

export interface IReadCardRequestBase extends IBaseRequestOptions {
  amount: number;
  includeSignature?: boolean;
  includeAmountDisplay?: boolean;
  beep?: boolean;
  aid?: string;
}

export interface IReadCardRequestOptions extends IReadCardRequestBase {
  gzipSignature?: boolean;
  signatureFormat?: string;
  signatureImageType?: string;
  signatureDimensions?: string;
  confirmAmount?: boolean
}

export interface IAuthCardRequestOptions extends IReadCardRequestOptions {
  includeAVS?: boolean;
  capture?: boolean;
  orderId?: string;
  userFields?: Object;
  clearDisplayDelay?: number;
}

export interface IReadCardResponseBase {
  token: string;
  expiry: string;
  name: string;
  signature: string;
}

export interface IReadCardResponse extends IReadCardResponseBase{
  singleUseToken: boolean;
}

export interface IAuthCardResponse extends IReadCardResponseBase {
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

export interface IReadManualRequestBase extends IBaseRequestOptions {
  includeSignature?: boolean;
  beep?: boolean;
}

export interface IReadManualRequestOptions extends IReadManualRequestBase {
  includeExpirationDate?: boolean;
}

export interface IReadManualResponse {
  token?: string;
  expiry?: string;
  signature?: string;
}

export interface IAuthManualRequestOptions extends IReadManualRequestBase {
  amount: number;
  authMerchantId?: string;
  includeAmountDisplay?: boolean;
  includeAVS?: boolean;
  includeCVV?: boolean;
  capture?: boolean;
  gzipSignature?: boolean;
  orderId?: string;
  clearDisplayDelay?: number;
}

export interface IAuthManualResponse extends IReadManualResponse {
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
  errorCode: number,
  errorMessage: string;
}
