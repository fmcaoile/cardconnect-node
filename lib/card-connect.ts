import * as RequestPromiseNative from 'request-promise-native';
import { FullResponse } from 'request-promise-native';
import { CardConnectBolt } from './card-connect-bolt';
import { ResponseHandler } from './response-handler';

import { 
  IBaseRequestOptions,
  IListTerminalsResponse,
  IPingResponse,
  IConnectRequestOptions,
  IConnectResponse,
  IDisconnectResponse,
  IReadInputRequestOptions,
  IReadInputResponse,
  IAuthCardRequestOptions,
  IAuthCardResponse,
  IAuthManualRequestOptions,
  IAuthManualResponse,
  ICardConnectError
} from './card-connect-types';

export interface ICardConnectInitOptions {
  apiKey: string;
  subDomain: string;
  merchantID: string;
  port?: number;
}

export class CardConnect extends CardConnectBolt {

  constructor (options: ICardConnectInitOptions) {
    super(options.apiKey, options.subDomain, options.merchantID, options.port || 6443);
  }

  public listTerminals (callback?: (error: ICardConnectError, response?: IListTerminalsResponse) => void) : Promise<IListTerminalsResponse> {
    return new Promise<IListTerminalsResponse>((resolve, reject) => {
      RequestPromiseNative(this.listTerminalsRequestBuilder())
        .then((response: FullResponse) => {
          const result = response.toJSON();
          const statusCode = result.statusCode;

          if (statusCode !== 200) {
            ResponseHandler.reject<ICardConnectError>( 
              {
                errorCode: -1,
                errorMessage: "CardConnect returned status " + statusCode
              },
              reject,
              callback
            );
            return;
          }

          const responseBody: IListTerminalsResponse = result.body;
          ResponseHandler.resolve<IListTerminalsResponse>(responseBody, resolve, callback);
        })
        .catch((err: any) => {
          const result = (err && err.response && err.response.body) || {};
          ResponseHandler.reject<ICardConnectError>(
            {
              errorCode: result['errorCode'],
              errorMessage: result['errorMessage']
            },
            reject,
            callback
          );
        });
    });
  }

  public ping (cardConnectSessionKey: string, params: IBaseRequestOptions, callback?: (error: ICardConnectError, response?: IPingResponse) => void) : Promise<IPingResponse> {
    return new Promise<IPingResponse>((resolve, reject) => {
      RequestPromiseNative(this.pingRequestBuilder(cardConnectSessionKey, params))
        .then((response: FullResponse) => {
          const result = response.toJSON();
          const statusCode = result.statusCode;

          if (statusCode !== 200) {
            ResponseHandler.reject<ICardConnectError>( 
              {
                errorCode: -1,
                errorMessage: "CardConnect returned status " + statusCode
              },
              reject,
              callback
            );
            return;
          }

          const responseBody: IPingResponse = result.body;
          ResponseHandler.resolve<IPingResponse>(responseBody, resolve, callback);
        })
        .catch((err: any) => {
          const result = (err && err.response && err.response.body) || {};
          ResponseHandler.reject<ICardConnectError>(
            {
              errorCode: result['errorCode'],
              errorMessage: result['errorMessage']
            },
            reject,
            callback
          );
        });
    });
  }

  public connect (params: IConnectRequestOptions, callback?: (error: ICardConnectError, response?: IConnectResponse) => void) : Promise<IConnectResponse> {
    return new Promise<IConnectResponse>((resolve, reject) => {
      RequestPromiseNative(this.connectRequestBuilder(params))
        .then((response: FullResponse) => {
          const result = response.toJSON();
          const statusCode = result.statusCode;
          let cardConnectSessionKey: string = result.headers['x-cardconnect-sessionkey'];

          if (statusCode !== 200) {
            ResponseHandler.reject<ICardConnectError>( 
              {
                errorCode: -1,
                errorMessage: "CardConnect returned status " + statusCode
              },
              reject,
              callback
            );

            return;
          }

          if (cardConnectSessionKey && cardConnectSessionKey.length > 0) {
            cardConnectSessionKey = cardConnectSessionKey.slice(0, cardConnectSessionKey.indexOf(';'));

            ResponseHandler.resolve<IConnectResponse>({
              sessionKey: cardConnectSessionKey,
              statusCode: statusCode
            }, resolve, callback);

          } else {
            ResponseHandler.reject<ICardConnectError>(
               {
                errorCode: -2,
                errorMessage: `CardConnect missing x-cardconnect-sessionkey`
              },
              reject,
              callback
            );
          }

        })
        .catch((err: any) => {
          const result = (err && err.response && err.response.body) || {};
          ResponseHandler.reject<ICardConnectError>(
            {
              errorCode: result['errorCode'],
              errorMessage: result['errorMessage']
            },
            reject,
            callback
          );
        });      
      });
      
  }

  public disconnect (cardConnectSessionKey: string, params: IBaseRequestOptions, callback?: (error: ICardConnectError, response?: IDisconnectResponse) => void) : Promise<IDisconnectResponse> {
    return new Promise<IDisconnectResponse>((resolve, reject) => {
      RequestPromiseNative(this.disconnectRequestBuilder(cardConnectSessionKey, params))
        .then((response: FullResponse) => {
          const result = response.toJSON();
          const statusCode = result.statusCode;

          if (statusCode !== 200) {
            ResponseHandler.reject<ICardConnectError>( 
              {
                errorCode: -1,
                errorMessage: "CardConnect returned status " + statusCode
              },
              reject,
              callback
            );
            return;
          }

          ResponseHandler.resolve<IDisconnectResponse>({
            disconnected: true
          }, resolve, callback);

        })
        .catch((err: any) => {
          const result = (err && err.response && err.response.body) || {};
          ResponseHandler.reject<ICardConnectError>(
            {
              errorCode: result['errorCode'],
              errorMessage: result['errorMessage']
            },
            reject,
            callback
          );
        })
    });
  }

  public readInput (cardConnectSessionKey: string, params: IReadInputRequestOptions, callback?: (error: ICardConnectError, response?: IReadInputResponse) => void) : Promise<IReadInputResponse> {
    return new Promise<IReadInputResponse>((resolve, reject) => {
      RequestPromiseNative(this.readInputRequestBuilder(cardConnectSessionKey, params))
        .then((response: FullResponse) => {
          const result = response.toJSON();
          const statusCode = result.statusCode;

          if (statusCode !== 200) {
            ResponseHandler.reject<ICardConnectError>( 
              {
                errorCode: -1,
                errorMessage: "CardConnect returned status " + statusCode
              },
              reject,
              callback
            );
            return;
          }

          const responseBody: IReadInputResponse = result.body;
          ResponseHandler.resolve<IReadInputResponse>(responseBody, resolve, callback);
        })
        .catch((err: any) => {
          const result = (err && err.response && err.response.body) || {};
          ResponseHandler.reject<ICardConnectError>(
            {
              errorCode: result['errorCode'],
              errorMessage: result['errorMessage']
            },
            reject,
            callback
          );
        })

    });

  }

  public authCard (cardConnectSessionKey: string, params: IAuthCardRequestOptions, callback?: (error: ICardConnectError, response?: IAuthCardResponse) => void) : Promise<IAuthCardResponse> {
    return new Promise<IAuthCardResponse>((resolve, reject) => {
      RequestPromiseNative(this.authCardRequestBuilder(cardConnectSessionKey, params))
        .then((response: FullResponse) => {
          const result = response.toJSON();
          const statusCode = result.statusCode;

          if (statusCode !== 200) {
            ResponseHandler.reject<ICardConnectError>( 
              {
                errorCode: -1,
                errorMessage: "CardConnect returned status " + statusCode
              },
              reject,
              callback
            );
            return;
          }

          const responseBody: IAuthCardResponse = result.body;
          ResponseHandler.resolve<IAuthCardResponse>(responseBody, resolve, callback);
        })
        .catch((err: any) => {
          const result = (err && err.response && err.response.body) || {};
          ResponseHandler.reject<ICardConnectError>(
            {
              errorCode: result['errorCode'],
              errorMessage: result['errorMessage']
            },
            reject,
            callback
          );
        });
    });
  }

  public authManual (cardConnectSessionKey: string, params: IAuthManualRequestOptions, callback?: (error: ICardConnectError, response?: IAuthManualResponse) => void) : Promise<IAuthManualResponse> {
    return new Promise<IAuthManualResponse>((resolve, reject) => {
      RequestPromiseNative(this.authManualRequestBuilder(cardConnectSessionKey, params))
        .then((response: FullResponse) => {
          const result = response.toJSON();
          const statusCode = result.statusCode;

          if (statusCode !== 200) {
            ResponseHandler.reject<ICardConnectError>( 
              {
                errorCode: -1,
                errorMessage: "CardConnect returned status " + statusCode
              },
              reject,
              callback
            );
            return;
          }

          const responseBody: IAuthManualResponse = result.body;
          ResponseHandler.resolve<IAuthManualResponse>(responseBody, resolve, callback);
        })
        .catch((err: any) => {
          const result = (err && err.response && err.response.body) || {};
          ResponseHandler.reject<ICardConnectError>(
            {
              errorCode: result['errorCode'],
              errorMessage: result['errorMessage']
            },
            reject,
            callback
          );
        });
    });
  }

};
