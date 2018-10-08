import { OptionsWithUrl } from 'request-promise-native';
import { 
  IBaseRequestOptions,
  IDateTimeRequestOptions,
  IConnectRequestOptions,
  IConnectResponse,
  IDisplayRequestOptions,
  IDisplayResponse,
  IReadConfirmationRequestoptions,
  IReadConfirmationResponse,
  IReadInputRequestOptions,
  IReadSignatureRequestOptions,
  IReadSignatureResponse,
  IReadCardRequestOptions,
  IReadManualRequestOptions,
  IAuthCardRequestOptions,
  IAuthManualRequestOptions
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

  public generateAuthHeaders (cardConnectSessionKey?: string) : { "Authorization": string, "X-CardConnect-SessionKey"?: string  } {
    return {
      "Authorization": this.apiKey,
      "X-CardConnect-SessionKey": cardConnectSessionKey ? cardConnectSessionKey : undefined
    }
  }

  public listTerminalsRequestBuilder (endPointVersion: string = 'v2') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/listTerminals`;
    const body = {
      merchantId : this.merchantID
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

  public dateTimeRequestBuilder (params: IDateTimeRequestOptions, endPointVersion: string = 'v2') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/dateTime`;
    const body = {
      merchantId : this.merchantID,
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

  public panPadVersionRequestBuilder (params: IBaseRequestOptions, endPointVersion: string = 'v2') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/getPanPadVersion`;
    const body: IBaseRequestOptions = {
      merchantId : this.merchantID,
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

  public preConnectRequestBuilder (params: IBaseRequestOptions, endPointVersion: string = 'v2') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/preconnect`;
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

  public displayRequestBuilder (cardConnectSessionKey: string, params: IDisplayRequestOptions, endPointVersion: string = 'v2') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/display`;
    const body: IDisplayRequestOptions = {
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

  public clearDisplayRequestBuilder (cardConnectSessionKey: string, params: IBaseRequestOptions, endPointVersion: string = 'v2') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/clearDisplay`;
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

  public readConfirmationRequestBuilder (cardConnectSessionKey: string, params: IReadConfirmationRequestoptions, endPointVersion: string = 'v2') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/readConfirmation`;
    const body: IReadConfirmationRequestoptions = {
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

  public readSignatureRequestBuilder (cardConnectSessionKey: string, params: IReadSignatureRequestOptions, endPointVersion: string = 'v2') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/readSignature`;
    const body: IReadSignatureRequestOptions = {
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

  public cancelRequestBuilder (cardConnectSessionKey: string, params: IBaseRequestOptions, endPointVersion: string = 'v2') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/cancel`;
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

  public readCardRequestBuilder (cardConnectSessionKey: string, params: IReadCardRequestOptions, endPointVersion: string = 'v2') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/readCard`;
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

  public readManualRequestBuilder (cardConnectSessionKey: string, params: IReadManualRequestOptions, endPointVersion: string = 'v2') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/readManual`;
    const body: IReadManualRequestOptions = {
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

  public authManualRequestBuilder (cardConnectSessionKey: string, params: IAuthManualRequestOptions, endPointVersion: string = 'v3') : OptionsWithUrl {
    const url: string = `${this.getBaseURL()}/${endPointVersion}/authManual`;
    const body: IAuthManualRequestOptions = {
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
