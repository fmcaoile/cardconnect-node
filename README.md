# cardconnect-node
CardConnect NodeJS Bolt P2PE Client with Typescript support

https://developer.cardconnect.com/bolt-p2pe#overview

## Installation
```
npm install --save cardconnect-node
```

## Usage
```
import { CardConnect } from 'cardconnect-node';

const cardConnect = new CardConnect({
  apiKey: 'YOUR_API_KEY', 
  subDomain: 'YOUR_SUBDOMAIN', 
  merchantID: 'YOUR_MERCHANTID'
});
```

## Service Endpoints

### ListTerminals

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#listTerminals)

```
import { IListTerminalsResponse } from 'cardconnect-node';

cardConnect.listTerminals()
  .then((response: IListTerminalsResponse)=>{
    
    for (let hsn of response) {
      console.log(`hsn: ${hsn}`);
    }
  })
  .catch((err) => { ... });
```

### Connect

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#connect)

```
import { IConnectRequestOptions } from 'cardconnect-node';

const params: IConnectRequestOptions = {
  hsn: string;
  merchantId?: string;
  token?: string;
  force?: boolean;
};

cardConnect.connect(params)
  .then((response)=>{
    const cardConnectSessionKey = response.sessionKey;
    console.log("cardConnectSessionKey: " + cardConnectSessionKey);
  })
  .catch((err) => { ... });
```
### DateTime

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#dateTime)

```
import { IDateTimeRequestOptions } from 'cardconnect-node';

const params: IDateTimeRequestOptions = {
  hsn: string;
  merchantId?: string;
  dateTime: string;
};

cardConnect.dateTime(params)
  .then((response: boolean)=>{
    ...
  })
  .catch((err) => { ... });
```

### GetPanPadVersion

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#getPanPadVersion)

```
import { IBaseRequestOptions } from 'cardconnect-node';

const params: IBaseRequestOptions = {
  hsn: string;
  merchantId?: string;
};

cardConnect.getPanPadVersion(params)
  .then((response: boolean)=>{
    ...
  })
  .catch((err) => { ... });
```

### PreConnect

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#preconnect)

```
import { IBaseRequestOptions, IPreConnectResponse } from 'cardconnect-node';

const params: IBaseRequestOptions = {
  hsn: string;
  merchantId?: string;
};

cardConnect.preConnect(params)
  .then((response: IPreConnectResponse)=>{
    ...
  })
  .catch((err) => { ... });
```

### Disconnect

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#disconnect)

```
import { IBaseRequestOptions } from 'cardconnect-node';

const params: IBaseRequestOptions = {
  hsn: string;
  merchantId?: string;
};

cardConnect.disconnect(params)
  .then((response)=>{
    console.log(response.disconnected);
  })
  .catch((err) => { ... });
```

### Display

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#display)

```
import { IDisplayRequestOptions, IDisplayResponse } from 'cardconnect-node';

const params: IDisplayRequestOptions = {
  hsn: string;
  merchantId?: string;
  text: string;
};

cardConnect.display(cardConnectSessionKey, params)
  .then((response: IDisplayResponse)=>{
    console.log(response);
  })
  .catch((err) => { ... });
```

### ClearDisplay

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#clearDisplay)

```
import { IBaseRequestOptions, IClearDisplayResponse } from 'cardconnect-node';

const params: IBaseRequestOptions = {
  hsn: string;
  merchantId?: string;
};

cardConnect.clearDisplay(cardConnectSessionKey, params)
  .then((response: IClearDisplayResponse)=>{
    console.log(response);
  })
  .catch((err) => { ... });
```

### ReadConfirmation

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#readConfirmation)

```
import { IReadConfirmationRequestoptions, IReadConfirmationResponse } from 'cardconnect-node';

const params: IReadConfirmationRequestoptions = {
  hsn: string;
  merchantId?: string;
  prompt: string;
  beep: boolean
};

cardConnect.readConfirmation(cardConnectSessionKey, params)
  .then((response: IReadConfirmationResponse)=>{
    console.log(response);
  })
  .catch((err) => { ... });
```

### ReadInput

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#readInput)

```
import { IReadInputRequestOptions, IReadInputResponse } from 'cardconnect-node';

const params: IReadInputRequestOptions = {
  hsn: string;
  merchantId?: string;
  prompt: string; 
  format: string;
  beep?: boolean;
};

cardConnect.readInput(cardConnectSessionKey, params)
  .then((response: IReadInputResponse)=>{
    console.log(response.input);
  })
  .catch((err) => { ... });
```

### ReadSignature

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#readSignature)

```
import { IReadSignatureRequestOptions, IReadSignatureResponse } from 'cardconnect-node';

const params: IReadSignatureRequestOptions = {
  hsn: string;
  merchantId?: string;
  prompt: string;
  gzipSignature: boolean;
  signatureFormat: string;
  signatureImageType: string;
  signatureDimensions: string;
};

cardConnect.readSignature(cardConnectSessionKey, params)
  .then((response: IReadSignatureResponse)=>{
    console.log(response.input);
  })
  .catch((err) => { ... });
```

### Cancel

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#cancel)

```
import { IBaseRequestOptions, ICancelResponse } from 'cardconnect-node';

const params: IBaseRequestOptions = {
  hsn: string;
  merchantId?: string;
};

cardConnect.cancel(cardConnectSessionKey, params)
  .then((response: ICancelResponse)=>{
    console.log(response.input);
  })
  .catch((err) => { ... });
```

### ReadCard

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#readCard)

```
import { IReadCardRequestOptions, IReadCardResponse } from 'cardconnect-node';

const params: IReadCardRequestOptions = {
  hsn: string;
  merchantId?: string;
  amount: number;
  includeSignature?: boolean;
  includeAmountDisplay?: boolean;
  beep?: boolean;
  aid?: string;
  gzipSignature: boolean;
  signatureFormat: string;
  signatureImageType: string;
  signatureDimensions: string;
  confirmAmount: boolean;
};

cardConnect.readCard(cardConnectSessionKey, params)
  .then((response: IReadCardResponse)=>{
    console.log(response.input);
  })
  .catch((err) => { ... });
```

### ReadManual

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#readManual)

```
import { IReadManualRequestOptions, IReadManualResponse } from 'cardconnect-node';

const params: IReadManualRequestOptions = {
  hsn: string;
  merchantId?: string;
  includeSignature: boolean;
  beep: boolean;
  includeExpirationDate: boolean;
};

cardConnect.readManual(cardConnectSessionKey, params)
  .then((response: IReadManualResponse)=>{
    console.log(response.input);
  })
  .catch((err) => { ... });
```

### AuthCard

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#authCard)

```
import { IAuthCardRequestOptions, IAuthCardResponse } from 'cardconnect-node';

const params: IAuthCardRequestOptions = {
  hsn: string;
  merchantId?: string;
  amount?: number;
  includeSignature?: boolean;
  includeAmountDisplay?: boolean;
  beep?: boolean;
  aid?: string;
  includeAVS?: boolean;
  capture?: boolean;
  orderId?: string;
  userFields?: Object;
  clearDisplayDelay?: number;
};

cardConnect.authCard(cardConnectSessionKey, params)
  .then((response: IAuthCardResponse)=>{
    console.log(response);
  })
  .catch((err) => { ... });
```

### AuthManual

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#authManual)

```
import { IAuthManualRequestOptions, IAuthManualResponse } from 'cardconnect-node';

const params: IAuthCardRequestOptions = {
  hsn: string;
  merchantId?: string;
  authMerchantId: string;
  amount: number;
  includeSignature: boolean;
  includeAmountDisplay: boolean;
  beep: boolean;
  includeAVS: boolean;
  includeCVV: boolean;
  capture: boolean;
  gzipSignature: boolean;
  orderId: string;
  clearDisplayDelay: number;
};

cardConnect.authManual(cardConnectSessionKey, params)
  .then((response: IAuthManualResponse)=>{
    console.log(response);
  })
  .catch((err) => { ... });
```

## Contributing
1) Fork it ( https://github.com/fmcaoile/cardconnect-node-bolt/fork )
2) Create your feature branch (git checkout -b my-new-feature)
3) Commit your changes (git commit -am 'Add some feature')
4) Push to the branch (git push origin my-new-feature)
5) Create a new Pull Request
