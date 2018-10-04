import { OptionsWithUrl } from 'request-promise-native';
import { IBaseRequestOptions, IConnectRequestOptions, IReadInputRequestOptions, IAuthCardRequestOptions } from './card-connect-types';
export declare class CardConnectBolt {
    protected apiKey: string;
    protected subDomain: string;
    protected merchantID: string;
    protected port: number;
    constructor(apiKey: string, subDomain: string, merchantID: string, port?: number);
    getBaseURL(): string;
    generateAuthHeaders(cardConnectSessionKey?: string): {
        "Authorization": string;
        "X-CardConnect-SessionKey": string;
    };
    pingRequestBuilder(cardConnectSessionKey: string, params: IBaseRequestOptions, endPointVersion?: string): OptionsWithUrl;
    connectRequestBuilder(params: IConnectRequestOptions, endPointVersion?: string): OptionsWithUrl;
    disconnectRequestBuilder(cardConnectSessionKey: string, params: IBaseRequestOptions, endPointVersion?: string): OptionsWithUrl;
    readInputRequestBuilder(cardConnectSessionKey: string, params: IReadInputRequestOptions, endPointVersion?: string): OptionsWithUrl;
    authCardRequestBuilder(cardConnectSessionKey: string, params: IAuthCardRequestOptions, endPointVersion?: string): OptionsWithUrl;
}
