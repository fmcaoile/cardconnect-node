"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var card_connect_1 = require("./card-connect");
var apiKey = "ZCb8pPkXcZDVO0CIngLSFrBJgA/BYyUZIHT8zaj3MPg=";
var subDomain = "bolt-uat";
var merchantID = "800000000272";
var cardConnect = new card_connect_1.CardConnect(apiKey, subDomain, merchantID);
var hsn = "18218SC81453321";
var sessionKey;
cardConnect.connect({ hsn: hsn, force: true })
    // .then((result) => {
    //   console.log('session key: ' + result.sessionKey);
    //   return cardConnect.disconnect(result.sessionKey, { hsn: hsn });
    // })
    .then(function (result) {
    sessionKey = result.sessionKey;
    console.log('session key: ' + sessionKey);
    return cardConnect.readInput(sessionKey, {
        hsn: hsn,
        prompt: "\"% or $ tips?\"",
        format: 'N1'
    });
})
    .then(function (result) {
    console.log(result);
    return cardConnect.authCard(sessionKey, {
        hsn: hsn,
        amount: 100 + '',
        "includeSignature": "false",
        "includeAmountDisplay": "true",
        "beep": "false",
        "aid": "credit",
        "includeAVS": "false",
        "capture": "true",
        "orderId": "1233200399",
        "clearDisplayDelay": "500"
    });
})
    .then(function (result) {
    console.log(result);
})
    .catch(function (err) {
    console.log(err);
});
