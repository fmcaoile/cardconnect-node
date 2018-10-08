import { OptionsWithUrl } from 'request-promise-native';
import { IBaseRequestOptions, IDateTimeRequestOptions, IConnectRequestOptions, IDisplayRequestOptions, IReadConfirmationRequestoptions, IReadInputRequestOptions, IReadSignatureRequestOptions, IReadCardRequestOptions, IReadManualRequestOptions, IAuthCardRequestOptions, IAuthManualRequestOptions } from './card-connect-types';
export declare class CardConnectBolt {
    protected apiKey: string;
    protected subDomain: string;
    protected merchantID: string;
    protected port: number;
    constructor(apiKey: string, subDomain: string, merchantID: string, port?: number);
    getBaseURL(): string;
    generateAuthHeaders(cardConnectSessionKey?: string): {
        "Authorization": string;
        "X-CardConnect-SessionKey"?: string;
    };
    listTerminalsRequestBuilder(endPointVersion?: string): OptionsWithUrl;
    dateTimeRequestBuilder(params: IDateTimeRequestOptions, endPointVersion?: string): OptionsWithUrl;
    panPadVersionRequestBuilder(params: IBaseRequestOptions, endPointVersion?: string): OptionsWithUrl;
    pingRequestBuilder(cardConnectSessionKey: string, params: IBaseRequestOptions, endPointVersion?: string): OptionsWithUrl;
    preConnectRequestBuilder(params: IBaseRequestOptions, endPointVersion?: string): OptionsWithUrl;
    connectRequestBuilder(params: IConnectRequestOptions, endPointVersion?: string): OptionsWithUrl;
    disconnectRequestBuilder(cardConnectSessionKey: string, params: IBaseRequestOptions, endPointVersion?: string): OptionsWithUrl;
    displayRequestBuilder(cardConnectSessionKey: string, params: IDisplayRequestOptions, endPointVersion?: string): OptionsWithUrl;
    clearDisplayRequestBuilder(cardConnectSessionKey: string, params: IBaseRequestOptions, endPointVersion?: string): OptionsWithUrl;
    readConfirmationRequestBuilder(cardConnectSessionKey: string, params: IReadConfirmationRequestoptions, endPointVersion?: string): OptionsWithUrl;
    readInputRequestBuilder(cardConnectSessionKey: string, params: IReadInputRequestOptions, endPointVersion?: string): OptionsWithUrl;
    readSignatureRequestBuilder(cardConnectSessionKey: string, params: IReadSignatureRequestOptions, endPointVersion?: string): OptionsWithUrl;
    cancelRequestBuilder(cardConnectSessionKey: string, params: IBaseRequestOptions, endPointVersion?: string): OptionsWithUrl;
    readCardRequestBuilder(cardConnectSessionKey: string, params: IReadCardRequestOptions, endPointVersion?: string): OptionsWithUrl;
    readManualRequestBuilder(cardConnectSessionKey: string, params: IReadManualRequestOptions, endPointVersion?: string): OptionsWithUrl;
    authCardRequestBuilder(cardConnectSessionKey: string, params: IAuthCardRequestOptions, endPointVersion?: string): OptionsWithUrl;
    authManualRequestBuilder(cardConnectSessionKey: string, params: IAuthManualRequestOptions, endPointVersion?: string): OptionsWithUrl;
}
