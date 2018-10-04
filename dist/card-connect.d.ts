import { CardConnectBolt } from './card-connect-bolt';
import { IBaseRequestOptions, IListTerminalsResponse, IPingResponse, IConnectRequestOptions, IConnectResponse, IDisconnectResponse, IReadInputRequestOptions, IReadInputResponse, IAuthCardRequestOptions, IAuthCardResponse, IAuthManualRequestOptions, IAuthManualResponse, ICardConnectError } from './card-connect-types';
export interface ICardConnectInitOptions {
    apiKey: string;
    subDomain: string;
    merchantID: string;
    port?: number;
}
export declare class CardConnect extends CardConnectBolt {
    constructor(options: ICardConnectInitOptions);
    listTerminals(callback?: (error: ICardConnectError, response?: IListTerminalsResponse) => void): Promise<IListTerminalsResponse>;
    ping(cardConnectSessionKey: string, params: IBaseRequestOptions, callback?: (error: ICardConnectError, response?: IPingResponse) => void): Promise<IPingResponse>;
    connect(params: IConnectRequestOptions, callback?: (error: ICardConnectError, response?: IConnectResponse) => void): Promise<IConnectResponse>;
    disconnect(cardConnectSessionKey: string, params: IBaseRequestOptions, callback?: (error: ICardConnectError, response?: IDisconnectResponse) => void): Promise<IDisconnectResponse>;
    readInput(cardConnectSessionKey: string, params: IReadInputRequestOptions, callback?: (error: ICardConnectError, response?: IReadInputResponse) => void): Promise<IReadInputResponse>;
    authCard(cardConnectSessionKey: string, params: IAuthCardRequestOptions, callback?: (error: ICardConnectError, response?: IAuthCardResponse) => void): Promise<IAuthCardResponse>;
    authManual(cardConnectSessionKey: string, params: IAuthManualRequestOptions, callback?: (error: ICardConnectError, response?: IAuthManualResponse) => void): Promise<IAuthManualResponse>;
}
