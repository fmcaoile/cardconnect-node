"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RequestPromiseNative = require("request-promise-native");
class CardConnect {
    constructor(apiKey, subDomain, merchantID, port = 6443) {
        this.apiKey = apiKey;
        this.subDomain = subDomain;
        this.merchantID = merchantID;
        this.port = port;
    }
    connect(params, callback) {
        return new Promise((resolve, reject) => {
            const url = `https://${this.subDomain}.cardpointe.com:${this.port}/api/v2/connect`;
            const body = Object.assign({ merchantId: this.merchantID }, params);
            RequestPromiseNative({
                url: url,
                method: 'POST',
                headers: {
                    Authorization: this.apiKey
                },
                json: body
            })
                .then((response) => {
                // const statusCode = result.statusCode;
                // let cardConnectSessionKey: string = result.headers['x-cardconnect-sessionkey'];
                // if (statusCode === 200) {
                //   if (cardConnectSessionKey && cardConnectSessionKey.length > 0) {
                //     cardConnectSessionKey = cardConnectSessionKey.slice(0, cardConnectSessionKey.indexOf(';'));
                //     callback(null, cardConnectSessionKey);
                //   } else {
                //     callback(new Error("Card connect session key not found"));
                //   }
                // } else {
                //   callback(new Error('Card Connect returned status: ' + statusCode));
                // }
                console.log(response);
                resolve();
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    disconnect(cardConnectSessionKey, callback) {
        return new Promise((resolve, reject) => {
            const url = `https://${this.subDomain}.cardpointe.com:${this.port}/api/v2/disconnect`;
            const body = {};
            RequestPromiseNative({
                url: url,
                method: 'POST',
                headers: {
                    "Authorization": this.apiKey,
                    "X-CardConnect-SessionKey": cardConnectSessionKey
                },
                json: body
            })
                .then(() => {
                // callback(null, { disconnected: true })
            })
                .catch(() => {
            });
        });
    }
}
exports.CardConnect = CardConnect;
;
