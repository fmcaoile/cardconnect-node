# cardconnect-node-bolt
CardConnect NodeJS Bolt P2PE Client


## Installation
```
npm install --save cardconnect-node-bolt
```

## Usage
```
import { CardConnect } from 'cardconnect-node-bolt';

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
import { IListTerminalsResponse } from 'cardconnect-node-bolt';

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
import { IConnectRequestOptions } from 'cardconnect-node-bolt';

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

### Disconnect

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#disconnect)

```
import { IBaseRequestOptions } from 'cardconnect-node-bolt';

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

### AuthCard

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#authCard)

```
import { IAuthCardRequestOptions, IAuthCardResponse } from 'cardconnect-node-bolt';

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
import { IAuthManualRequestOptions, IAuthManualResponse } from 'cardconnect-node-bolt';

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

### ReadInput

CardConnect documentation for this service can be found here: (https://developer.cardconnect.com/bolt-p2pe#readInput)

```
import { IReadInputRequestOptions, IReadInputResponse } from 'cardconnect-node-bolt';

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

## TODO
- **dateTime**
- **getPanPadVersion**
- **display**
- **clearDisplay**
- **readConfirmation**
- **readSignature**
- **cancel**
- **readCard**
- **readManual**

## Contributing
1) Fork it ( https://github.com/fmcaoile/cardconnect-node-bolt/fork )
2) Create your feature branch (git checkout -b my-new-feature)
3) Commit your changes (git commit -am 'Add some feature')
4) Push to the branch (git push origin my-new-feature)
5) Create a new Pull Request
