'use strict';
const expect = require('chai').expect;
const CardConnectBolt = require('../dist/card-connect-bolt.js');

const apiKey = 'abc123';
const subDomain = 'xyz';
const merchantID = '123';
const hsn = '893542';
const port = 6444;
const sessionKey = 'ABC_SESSION';
const cardConnect =  new CardConnectBolt.CardConnectBolt(
    apiKey,
    subDomain,
    merchantID,
    port
);

function testUrlOptions (request, sessionKey) {
    expect(request.method).to.equal('POST');
    expect(request.headers['Authorization']).to.equal(apiKey);
    expect(request.body.merchantId).to.equal(merchantID);
    expect(request.json).to.equal(true);
    expect(request.resolveWithFullResponse).to.equal(true);

    if (sessionKey) {
        expect(request.headers['X-CardConnect-SessionKey']).to.equal(sessionKey);
    }
}

describe('CardConnectBolt class tests', () => {
    it('should initialize with parameters', () => {
        expect(cardConnect.apiKey).to.equal(apiKey);
        expect(cardConnect.subDomain).to.equal(subDomain);
        expect(cardConnect.merchantID).to.equal(merchantID);
        expect(cardConnect.port).to.equal(port);
    });

    it('should build listTerminals endpoint request', () => {
        let request = cardConnect.listTerminalsRequestBuilder();
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v2'+'/listTerminals');
        testUrlOptions(request);

        request = cardConnect.listTerminalsRequestBuilder('v3');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/listTerminals');
    });

    it('should build dateTime endpoint request', () => {
        let request = cardConnect.dateTimeRequestBuilder({ hsn: hsn });
        testUrlOptions(request);
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v2'+'/dateTime');
        expect(request.body.hsn).to.equal(hsn);
        
        request = cardConnect.dateTimeRequestBuilder({hsn: hsn}, 'v3');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/dateTime');
    });

    it('should build getPanPadVersion endpoint request', () => {
        let request = cardConnect.panPadVersionRequestBuilder({ hsn: hsn });
        testUrlOptions(request);
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v2'+'/getPanPadVersion');
        expect(request.body.hsn).to.equal(hsn);
        
        request = cardConnect.panPadVersionRequestBuilder({ hsn: hsn }, 'v3');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/getPanPadVersion');
    });

    it('should build ping endpoint request', () => {
        let request = cardConnect.pingRequestBuilder(sessionKey,{ hsn: hsn });
        testUrlOptions(request, sessionKey);
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v2'+'/ping');
        expect(request.body.hsn).to.equal(hsn);
        
        request = cardConnect.pingRequestBuilder(sessionKey, { hsn: hsn }, 'v3');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/ping');
    });

    it('should build preconnect endpoint request', () => {
        let request = cardConnect.preConnectRequestBuilder({ hsn: hsn });
        testUrlOptions(request);
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v2'+'/preconnect');
        expect(request.body.hsn).to.equal(hsn);
        
        request = cardConnect.preConnectRequestBuilder({ hsn: hsn }, 'v3');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/preconnect');
    });

    it('should build connect endpoint request', () => {
        let request = cardConnect.connectRequestBuilder({ hsn: hsn, token: "LLL", force: true });
        testUrlOptions(request);
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v2'+'/connect');
        expect(request.body.hsn).to.equal(hsn);
        expect(request.body.token).to.equal('LLL');
        expect(request.body.force).to.equal(true);
        
        request = cardConnect.connectRequestBuilder({ hsn: hsn }, 'v3');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/connect');
    });

    it('should build disconnect endpoint request', () => {
        let request = cardConnect.disconnectRequestBuilder(sessionKey, { hsn: hsn });
        testUrlOptions(request, sessionKey);
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v2'+'/disconnect');
        expect(request.body.hsn).to.equal(hsn);
        
        request = cardConnect.disconnectRequestBuilder(sessionKey, { hsn: hsn }, 'v3');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/disconnect');
    });

    it('should build display endpoint request', () => {
        let text = 'Approved';
        let request = cardConnect.displayRequestBuilder(sessionKey, { hsn: hsn, text: text });
        let body = request.body;

        testUrlOptions(request, sessionKey);
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v2'+'/display');
        expect(body.hsn).to.equal(hsn);
        expect(body.text).to.equal(text);
        
        request = cardConnect.displayRequestBuilder(sessionKey, { hsn: hsn }, 'v3');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/display');
    });

    it('should build clearDisplay endpoint request', () => {
        let request = cardConnect.clearDisplayRequestBuilder(sessionKey, { hsn: hsn });
        testUrlOptions(request, sessionKey);
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v2'+'/clearDisplay');
        expect(request.body.hsn).to.equal(hsn);
        
        request = cardConnect.clearDisplayRequestBuilder(sessionKey, { hsn: hsn }, 'v3');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/clearDisplay');
    });

    it('should build readConfirmation endpoint request', () => {
        let prompt = 'Please confirm';
        let beep = false;
        let request = cardConnect.readConfirmationRequestBuilder(sessionKey, { 
            hsn: hsn, 
            prompt: prompt,
            beep: beep
        });

        testUrlOptions(request, sessionKey);

        let body = request.body;
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v2'+'/readConfirmation');
        expect(body.hsn).to.equal(hsn);
        expect(body.prompt).to.equal(prompt);
        expect(body.beep).to.equal(beep);
        
        request = cardConnect.readConfirmationRequestBuilder(sessionKey, { hsn: hsn }, 'v3');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/readConfirmation');
    });

    it('should build readInputRequestBuilder endpoint request', () => {
        let prompt = 'Please confirm';
        let format = 'PHONE';
        let beep = false;
        let request = cardConnect.readInputRequestBuilder(sessionKey, { 
            hsn: hsn, 
            prompt: prompt,
            format: format,
            beep: beep
        });

        testUrlOptions(request, sessionKey);

        let body = request.body;
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v2'+'/readInput');
        expect(body.hsn).to.equal(hsn);
        expect(body.prompt).to.equal(prompt);
        expect(body.format).to.equal(format);
        expect(body.beep).to.equal(beep);
        
        request = cardConnect.readInputRequestBuilder(sessionKey, { hsn: hsn }, 'v3');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/readInput');
    });

    it('should build readSignature endpoint request', () => {
        let prompt = 'May I have your autograph?';
        let gzipSignature = false;
        let signatureFormat = 'png';
        let signatureImageType = 'rgb';
        let signatureDimensions = '320,450';
        let request = cardConnect.readSignatureRequestBuilder(sessionKey, {
            hsn: hsn,
            prompt: prompt,
            gzipSignature: gzipSignature,
            signatureFormat: signatureFormat,
            signatureImageType: signatureImageType,
            signatureDimensions: signatureDimensions
        });
        
        testUrlOptions(request, sessionKey);

        let body = request.body;
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v2'+'/readSignature');
        expect(body.hsn).to.equal(hsn);
        expect(body.prompt).to.equal(prompt);
        expect(body.gzipSignature).to.equal(gzipSignature);
        expect(body.signatureFormat).to.equal(signatureFormat);
        expect(body.signatureImageType).to.equal(signatureImageType);
        expect(body.signatureDimensions).to.equal(signatureDimensions);
        
        request = cardConnect.readSignatureRequestBuilder(sessionKey, { hsn: hsn }, 'v3');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/readSignature');
    });

    it('should build cancel endpoint request', () => {
        let request = cardConnect.cancelRequestBuilder(sessionKey, { hsn: hsn });
        testUrlOptions(request, sessionKey);
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v2'+'/cancel');
        expect(request.body.hsn).to.equal(hsn);
        
        request = cardConnect.cancelRequestBuilder(sessionKey, { hsn: hsn }, 'v3');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/cancel');
    });

    it('should build readCard endpoint request', () => {
        let amount = 100;
        let includeSignature = false;
        let includeAmountDisplay = true;
        let beep = false;
        let aid = 'credit';
        let gzipSignature = false;
        let signatureFormat = 'png';
        let signatureImageType = 'rgb';
        let signatureDimensions = '320,450';
        let confirmAmount = true;

        let request = cardConnect.readCardRequestBuilder(sessionKey, {
            hsn: hsn,
            amount: amount,
            includeSignature: includeSignature,
            includeAmountDisplay: includeAmountDisplay,
            beep: beep,
            aid: aid,
            gzipSignature: gzipSignature,
            signatureFormat: signatureFormat,
            signatureImageType: signatureImageType,
            signatureDimensions: signatureDimensions,
            confirmAmount: confirmAmount
        });
        
        testUrlOptions(request, sessionKey);

        let body = request.body;
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v2'+'/readCard');
        expect(body.hsn).to.equal(hsn);
        
        expect(body.amount).to.equal(amount);
        expect(body.includeSignature).to.equal(includeSignature);
        expect(body.includeAmountDisplay).to.equal(includeAmountDisplay);
        expect(body.beep).to.equal(beep);
        expect(body.aid).to.equal(aid);
        expect(body.gzipSignature).to.equal(gzipSignature);
        expect(body.signatureFormat).to.equal(signatureFormat);
        expect(body.signatureImageType).to.equal(signatureImageType);
        expect(body.signatureDimensions).to.equal(signatureDimensions);
        expect(body.confirmAmount).to.equal(confirmAmount);
        
        request = cardConnect.readCardRequestBuilder(sessionKey, { hsn: hsn }, 'v3');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/readCard');
    });

    it('should build readManual endpoint request', () => {
        let beep = true;
        let includeSignature = false;
        let includeExpirationDate = true;
        
        let request = cardConnect.readManualRequestBuilder(sessionKey, {
            hsn: hsn,
            beep: beep,
            includeSignature: includeSignature,
            includeExpirationDate: includeExpirationDate
        });
        
        testUrlOptions(request, sessionKey);

        let body = request.body;
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v2'+'/readManual');
        expect(body.hsn).to.equal(hsn);
        expect(body.beep).to.equal(beep);
        expect(body.includeSignature).to.equal(includeSignature);
        expect(body.includeExpirationDate).to.equal(includeExpirationDate);
        
        request = cardConnect.readManualRequestBuilder(sessionKey, { hsn: hsn }, 'v3');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/readManual');
    });

    it('should build authCard endpoint request', () => {
        let amount = 100;
        let includeSignature = false;
        let includeAmountDisplay = true;
        let beep = false;
        let aid = 'credit';
        let gzipSignature = false;
        let signatureFormat = 'png';
        let signatureImageType = 'rgb';
        let signatureDimensions = '320,450';
        let confirmAmount = true;

        let includeAVS = true;
        let capture = false;
        let orderId = 'XYZ';
        let clearDisplayDelay = 500;
        
        let request = cardConnect.authCardRequestBuilder(sessionKey, {
            hsn: hsn,
            amount: amount,
            includeSignature: includeSignature,
            includeAmountDisplay: includeAmountDisplay,
            beep: beep,
            aid: aid,
            gzipSignature: gzipSignature,
            signatureFormat: signatureFormat,
            signatureImageType: signatureImageType,
            signatureDimensions: signatureDimensions,
            confirmAmount: confirmAmount,
            includeAVS: includeAVS,
            capture: capture,
            orderId: orderId,
            clearDisplayDelay: clearDisplayDelay
        });
        
        testUrlOptions(request, sessionKey);

        let body = request.body;
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/authCard');
        expect(body.hsn).to.equal(hsn);
        expect(body.amount).to.equal(amount);
        expect(body.includeSignature).to.equal(includeSignature);
        expect(body.includeAmountDisplay).to.equal(includeAmountDisplay);
        expect(body.beep).to.equal(beep);
        expect(body.aid).to.equal(aid);
        expect(body.gzipSignature).to.equal(gzipSignature);
        expect(body.signatureFormat).to.equal(signatureFormat);
        expect(body.signatureImageType).to.equal(signatureImageType);
        expect(body.signatureDimensions).to.equal(signatureDimensions);
        expect(body.confirmAmount).to.equal(confirmAmount);
        expect(body.includeAVS).to.equal(includeAVS);
        expect(body.capture).to.equal(capture);
        expect(body.orderId).to.equal(orderId);
        expect(body.clearDisplayDelay).to.equal(clearDisplayDelay);

        request = cardConnect.authCardRequestBuilder(sessionKey, { hsn: hsn }, 'v4');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v4'+'/authCard');
    });


    it('should build authManual endpoint request', () => {
        let includeSignature = true;
        let beep = false;
        let authMerchantId = '5789';
        let amount = 100;
        let includeAmountDisplay = true;
        let includeAVS = true;
        let includeCVV = true;
        let capture = true;
        let gzipSignature = false;
        let orderId = 'XYZ';
        let clearDisplayDelay = 500;
        
        let request = cardConnect.authManualRequestBuilder(sessionKey, {
            hsn: hsn,
            includeSignature: includeSignature,
            beep: beep,
            authMerchantId: authMerchantId,
            amount: amount,
            includeAmountDisplay: includeAmountDisplay,
            includeAVS: includeAVS,
            includeCVV: includeCVV,
            capture: capture,
            gzipSignature: gzipSignature,
            orderId: orderId,
            clearDisplayDelay: clearDisplayDelay
        });
        
        testUrlOptions(request, sessionKey);

        let body = request.body;
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v3'+'/authManual');
        expect(body.hsn).to.equal(hsn);
        expect(body.includeSignature).to.equal(includeSignature);
        expect(body.beep).to.equal(beep);
        expect(body.authMerchantId).to.equal(authMerchantId);
        expect(body.amount).to.equal(amount);
        expect(body.includeAmountDisplay).to.equal(includeAmountDisplay);
        expect(body.includeAVS).to.equal(includeAVS);
        expect(body.includeCVV).to.equal(includeCVV);
        expect(body.capture).to.equal(capture);
        expect(body.gzipSignature).to.equal(gzipSignature);
        expect(body.orderId).to.equal(orderId);
        expect(body.clearDisplayDelay).to.equal(clearDisplayDelay);

        request = cardConnect.authManualRequestBuilder(sessionKey, { hsn: hsn }, 'v4');
        expect(request.url).to.equal(cardConnect.getBaseURL()+'/v4'+'/authManual');
    });
    
});
