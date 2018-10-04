"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResponseHandler = /** @class */ (function () {
    function ResponseHandler() {
    }
    ResponseHandler.resolve = function (value, resolve, callback) {
        resolve(value);
        if (typeof callback === 'function') {
            callback(null, value);
        }
    };
    ResponseHandler.reject = function (value, reject, callback) {
        reject(value);
        if (typeof callback === 'function') {
            callback(value);
        }
    };
    return ResponseHandler;
}());
exports.ResponseHandler = ResponseHandler;
;
