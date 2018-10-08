import { CardConnectBolt } from './card-connect-bolt';
import { IBaseRequestOptions, IListTerminalsResponse, IDateTimeRequestOptions, IPanPadResponse, IPingResponse, IPreConnectResponse, IConnectRequestOptions, IConnectResponse, IDisconnectResponse, IDisplayRequestOptions, IDisplayResponse, IClearDisplayResponse, IReadConfirmationRequestoptions, IReadConfirmationResponse, IReadInputRequestOptions, IReadInputResponse, IReadSignatureRequestOptions, IReadSignatureResponse, ICancelResponse, IReadCardRequestOptions, IReadCardResponse, IReadManualRequestOptions, IReadManualResponse, IAuthCardRequestOptions, IAuthCardResponse, IAuthManualRequestOptions, IAuthManualResponse, ICardConnectError } from './card-connect-types';
export interface ICardConnectInitOptions {
    apiKey: string;
    subDomain: string;
    merchantID: string;
    port?: number;
}
export declare class CardConnect extends CardConnectBolt {
    constructor(options: ICardConnectInitOptions);
    listTerminals(callback?: (error: ICardConnectError, response?: IListTerminalsResponse) => void): Promise<IListTerminalsResponse>;
    dateTime(params: IDateTimeRequestOptions, callback?: (error: ICardConnectError, response?: Boolean) => void): Promise<Boolean>;
    getPanPadVersion(params: IBaseRequestOptions, callback?: (error: ICardConnectError, response?: IPanPadResponse) => void): Promise<IPanPadResponse>;
    ping(cardConnectSessionKey: string, params: IBaseRequestOptions, callback?: (error: ICardConnectError, response?: IPingResponse) => void): Promise<IPingResponse>;
    preConnect(params: IBaseRequestOptions, callback?: (error: ICardConnectError, response?: IPreConnectResponse) => void): Promise<IPreConnectResponse>;
    connect(params: IConnectRequestOptions, callback?: (error: ICardConnectError, response?: IConnectResponse) => void): Promise<IConnectResponse>;
    disconnect(cardConnectSessionKey: string, params: IBaseRequestOptions, callback?: (error: ICardConnectError, response?: IDisconnectResponse) => void): Promise<IDisconnectResponse>;
    display(cardConnectSessionKey: string, params: IDisplayRequestOptions, callback?: (error: ICardConnectError, response?: IDisplayResponse) => void): Promise<IDisplayResponse>;
    clearDisplay(cardConnectSessionKey: string, params: IBaseRequestOptions, callback?: (error: ICardConnectError, response?: IClearDisplayResponse) => void): Promise<IClearDisplayResponse>;
    readConfirmation(cardConnectSessionKey: string, params: IReadConfirmationRequestoptions, callback?: (error: ICardConnectError, response?: IReadConfirmationResponse) => void): Promise<IReadConfirmationResponse>;
    readInput(cardConnectSessionKey: string, params: IReadInputRequestOptions, callback?: (error: ICardConnectError, response?: IReadInputResponse) => void): Promise<IReadInputResponse>;
    readSignature(cardConnectSessionKey: string, params: IReadSignatureRequestOptions, callback?: (error: ICardConnectError, response?: IReadSignatureResponse) => void): Promise<IReadSignatureResponse>;
    cancel(cardConnectSessionKey: string, params: IBaseRequestOptions, callback?: (error: ICardConnectError, response?: ICancelResponse) => void): Promise<ICancelResponse>;
    readCard(cardConnectSessionKey: string, params: IReadCardRequestOptions, callback?: (error: ICardConnectError, response?: IReadCardResponse) => void): Promise<IReadCardResponse>;
    readManual(cardConnectSessionKey: string, params: IReadManualRequestOptions, callback?: (error: ICardConnectError, response?: IReadManualResponse) => void): Promise<IReadManualResponse>;
    authCard(cardConnectSessionKey: string, params: IAuthCardRequestOptions, callback?: (error: ICardConnectError, response?: IAuthCardResponse) => void): Promise<IAuthCardResponse>;
    authManual(cardConnectSessionKey: string, params: IAuthManualRequestOptions, callback?: (error: ICardConnectError, response?: IAuthManualResponse) => void): Promise<IAuthManualResponse>;
}
