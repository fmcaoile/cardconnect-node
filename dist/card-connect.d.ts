import { CardConnectBolt } from './card-connect-bolt';
import { IBaseRequestOptions, IPingResponse, IConnectRequestOptions, IConnectResponse, IDisconnectResponse, IReadInputRequestOptions, IReadInputResponse, IAuthCardRequestOptions, IAuthCardResponse, ICardConnectError } from './card-connect-types';
export declare class CardConnect extends CardConnectBolt {
    constructor(apiKey: string, subDomain: string, merchantID: string, port?: number);
    ping(cardConnectSessionKey: string, params: IBaseRequestOptions, callback?: (error: ICardConnectError, response?: IPingResponse) => void): Promise<IPingResponse>;
    connect(params: IConnectRequestOptions, callback?: (error: ICardConnectError, response?: IConnectResponse) => void): Promise<IConnectResponse>;
    disconnect(cardConnectSessionKey: string, params: IBaseRequestOptions, callback?: (error: ICardConnectError, response?: IDisconnectResponse) => void): Promise<IDisconnectResponse>;
    readInput(cardConnectSessionKey: string, params: IReadInputRequestOptions, callback?: (error: ICardConnectError, response?: IReadInputResponse) => void): Promise<IReadInputResponse>;
    authCard(cardConnectSessionKey: string, params: IAuthCardRequestOptions, callback?: (error: ICardConnectError, response?: IAuthCardResponse) => void): Promise<IAuthCardResponse>;
}
