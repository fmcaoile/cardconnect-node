"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var RequestPromiseNative = require("request-promise-native");
var card_connect_bolt_1 = require("./card-connect-bolt");
var response_handler_1 = require("./response-handler");
var CardConnect = /** @class */ (function (_super) {
    __extends(CardConnect, _super);
    function CardConnect(options) {
        return _super.call(this, options.apiKey, options.subDomain, options.merchantID, options.port || 6443) || this;
    }
    CardConnect.prototype.listTerminals = function (callback) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            RequestPromiseNative(_this.listTerminalsRequestBuilder())
                .then(function (response) {
                var result = response.toJSON();
                var statusCode = result.statusCode;
                if (statusCode !== 200) {
                    response_handler_1.ResponseHandler.reject({
                        errorCode: -1,
                        errorMessage: "CardConnect returned status " + statusCode
                    }, reject, callback);
                    return;
                }
                var responseBody = result.body;
                response_handler_1.ResponseHandler.resolve(responseBody, resolve, callback);
            })
                .catch(function (err) {
                var result = (err && err.response && err.response.body) || {};
                response_handler_1.ResponseHandler.reject({
                    errorCode: result['errorCode'],
                    errorMessage: result['errorMessage']
                }, reject, callback);
            });
        });
    };
    CardConnect.prototype.ping = function (cardConnectSessionKey, params, callback) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            RequestPromiseNative(_this.pingRequestBuilder(cardConnectSessionKey, params))
                .then(function (response) {
                var result = response.toJSON();
                var statusCode = result.statusCode;
                if (statusCode !== 200) {
                    response_handler_1.ResponseHandler.reject({
                        errorCode: -1,
                        errorMessage: "CardConnect returned status " + statusCode
                    }, reject, callback);
                    return;
                }
                var responseBody = result.body;
                response_handler_1.ResponseHandler.resolve(responseBody, resolve, callback);
            })
                .catch(function (err) {
                var result = (err && err.response && err.response.body) || {};
                response_handler_1.ResponseHandler.reject({
                    errorCode: result['errorCode'],
                    errorMessage: result['errorMessage']
                }, reject, callback);
            });
        });
    };
    CardConnect.prototype.connect = function (params, callback) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            RequestPromiseNative(_this.connectRequestBuilder(params))
                .then(function (response) {
                var result = response.toJSON();
                var statusCode = result.statusCode;
                var cardConnectSessionKey = result.headers['x-cardconnect-sessionkey'];
                if (statusCode !== 200) {
                    response_handler_1.ResponseHandler.reject({
                        errorCode: -1,
                        errorMessage: "CardConnect returned status " + statusCode
                    }, reject, callback);
                    return;
                }
                if (cardConnectSessionKey && cardConnectSessionKey.length > 0) {
                    cardConnectSessionKey = cardConnectSessionKey.slice(0, cardConnectSessionKey.indexOf(';'));
                    response_handler_1.ResponseHandler.resolve({
                        sessionKey: cardConnectSessionKey,
                        statusCode: statusCode
                    }, resolve, callback);
                }
                else {
                    response_handler_1.ResponseHandler.reject({
                        errorCode: -2,
                        errorMessage: "CardConnect missing x-cardconnect-sessionkey"
                    }, reject, callback);
                }
            })
                .catch(function (err) {
                var result = (err && err.response && err.response.body) || {};
                response_handler_1.ResponseHandler.reject({
                    errorCode: result['errorCode'],
                    errorMessage: result['errorMessage']
                }, reject, callback);
            });
        });
    };
    CardConnect.prototype.disconnect = function (cardConnectSessionKey, params, callback) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            RequestPromiseNative(_this.disconnectRequestBuilder(cardConnectSessionKey, params))
                .then(function (response) {
                var result = response.toJSON();
                var statusCode = result.statusCode;
                if (statusCode !== 200) {
                    response_handler_1.ResponseHandler.reject({
                        errorCode: -1,
                        errorMessage: "CardConnect returned status " + statusCode
                    }, reject, callback);
                    return;
                }
                response_handler_1.ResponseHandler.resolve({
                    disconnected: true
                }, resolve, callback);
            })
                .catch(function (err) {
                var result = (err && err.response && err.response.body) || {};
                response_handler_1.ResponseHandler.reject({
                    errorCode: result['errorCode'],
                    errorMessage: result['errorMessage']
                }, reject, callback);
            });
        });
    };
    CardConnect.prototype.readInput = function (cardConnectSessionKey, params, callback) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            RequestPromiseNative(_this.readInputRequestBuilder(cardConnectSessionKey, params))
                .then(function (response) {
                var result = response.toJSON();
                var statusCode = result.statusCode;
                if (statusCode !== 200) {
                    response_handler_1.ResponseHandler.reject({
                        errorCode: -1,
                        errorMessage: "CardConnect returned status " + statusCode
                    }, reject, callback);
                    return;
                }
                var responseBody = result.body;
                response_handler_1.ResponseHandler.resolve(responseBody, resolve, callback);
            })
                .catch(function (err) {
                var result = (err && err.response && err.response.body) || {};
                response_handler_1.ResponseHandler.reject({
                    errorCode: result['errorCode'],
                    errorMessage: result['errorMessage']
                }, reject, callback);
            });
        });
    };
    CardConnect.prototype.authCard = function (cardConnectSessionKey, params, callback) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            RequestPromiseNative(_this.authCardRequestBuilder(cardConnectSessionKey, params))
                .then(function (response) {
                var result = response.toJSON();
                var statusCode = result.statusCode;
                if (statusCode !== 200) {
                    response_handler_1.ResponseHandler.reject({
                        errorCode: -1,
                        errorMessage: "CardConnect returned status " + statusCode
                    }, reject, callback);
                    return;
                }
                var responseBody = result.body;
                response_handler_1.ResponseHandler.resolve(responseBody, resolve, callback);
            })
                .catch(function (err) {
                var result = (err && err.response && err.response.body) || {};
                response_handler_1.ResponseHandler.reject({
                    errorCode: result['errorCode'],
                    errorMessage: result['errorMessage']
                }, reject, callback);
            });
        });
    };
    CardConnect.prototype.authManual = function (cardConnectSessionKey, params, callback) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            RequestPromiseNative(_this.authManualRequestBuilder(cardConnectSessionKey, params))
                .then(function (response) {
                var result = response.toJSON();
                var statusCode = result.statusCode;
                if (statusCode !== 200) {
                    response_handler_1.ResponseHandler.reject({
                        errorCode: -1,
                        errorMessage: "CardConnect returned status " + statusCode
                    }, reject, callback);
                    return;
                }
                var responseBody = result.body;
                response_handler_1.ResponseHandler.resolve(responseBody, resolve, callback);
            })
                .catch(function (err) {
                var result = (err && err.response && err.response.body) || {};
                response_handler_1.ResponseHandler.reject({
                    errorCode: result['errorCode'],
                    errorMessage: result['errorMessage']
                }, reject, callback);
            });
        });
    };
    return CardConnect;
}(card_connect_bolt_1.CardConnectBolt));
exports.CardConnect = CardConnect;
;
