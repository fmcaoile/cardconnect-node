import { OptionsWithUrl } from 'request-promise-native';

import { 
  IBaseRequestOptions,

  IConnectRequestOptions,
  IConnectResponse,

  IReadInputRequestOptions,

  IAuthCardRequestOptions
} from './card-connect-types';

export class CardConnectBolt {

  constructor (
    protected apiKey: string,
    protected subDomain: string, 
    protected merchantID: string,
    protected port: number = 6443) {
  }

  public getBaseURL () : string {
    return `https://${this.subDomain}.cardpointe.com:${this.port}/api`;
  }

  public generateAuthHeaders (cardConnectSessionKey?: string) : { "Authorization": string, "X-CardConnect-SessionKey": string  } {
    return {
      "Authorization": this.apiKey,
      "X-CardConnect-SessionKey": cardConnectSessionKey ? cardConnectSessionKey : ''
    }
  }

  public pingRequestBuilder (cardConnectSessionKey: string, params: IBaseRequestOptions, endPointVersion: string = 'v2') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/ping`;
    const body: IBaseRequestOptions = {
      merchantId : this.merchantID,
      ...params
    };

    return {
      url: url,
      method: 'POST',
      headers: this.generateAuthHeaders(cardConnectSessionKey),
      body: body,
      json: true,
      resolveWithFullResponse: true
    };
  }

  public connectRequestBuilder (params: IConnectRequestOptions, endPointVersion: string = 'v2') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/connect`;
    const body: IConnectRequestOptions = {
      merchantId: this.merchantID,
      ...params
    };

    return {
      url: url, 
      method: 'POST', 
      headers: this.generateAuthHeaders(),
      body: body,
      json: true,
      resolveWithFullResponse: true
    };
  }

  public disconnectRequestBuilder (cardConnectSessionKey: string, params: IBaseRequestOptions, endPointVersion: string = 'v2') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/disconnect`;
    const body = {
      merchantId: this.merchantID,
      ...params
    };

    return {
      url: url, 
      method: 'POST', 
      headers : this.generateAuthHeaders(cardConnectSessionKey),
      body: body,
      json: true,
      resolveWithFullResponse: true
    };
  }

  public readInputRequestBuilder (cardConnectSessionKey: string, params: IReadInputRequestOptions, endPointVersion: string = 'v2') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/readInput`;
    const body: IReadInputRequestOptions = {
      merchantId: this.merchantID,
      ...params
    };

    return {
      url: url, 
      method: 'POST', 
      headers : this.generateAuthHeaders(cardConnectSessionKey),
      body: body,
      json: true,
      resolveWithFullResponse: true
    }
  }

  public authCardRequestBuilder (cardConnectSessionKey: string, params: IAuthCardRequestOptions, endPointVersion: string = 'v3') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/authCard`;
    const body: IAuthCardRequestOptions = {
      merchantId: this.merchantID,
      ...params
    };

   return {
      url: url, 
      method: 'POST', 
      headers : this.generateAuthHeaders(cardConnectSessionKey),
      body: body,
      json: true,
      resolveWithFullResponse: true
    };
  }

};
