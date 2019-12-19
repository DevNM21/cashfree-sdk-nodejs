# cashfree-sdk-nodejs

The official Cashfree SDK for JavaScript, available for Node.js backends

Get started quickly using Cashfree with the Cashfree SDK for JavaScript in Node.js. The SDK helps take the complexity out of coding by providing JavaScript objects for Cashfree services including Payouts, Payment Gateway, Marketplace and Autocollect. The single, downloadable package includes the Cashfree JavaScript Library and documentation.

Please refer to the [Cashfree Docs](https://docs.cashfree.com/docs/)  for the complete API reference.

## Installing
### In Node.js

The preferred way to install the Cashfree SDK for Node.js is to use the [npm](http://npmjs.org) package manager for Node.js. Simply type the following into a terminal window:
```sh
npm install https://github.com/cashfree/cashfree-sdk-nodejs
```

## Getting Started
### Pre-requisites
  - A [Cashfree Merchant Account](https://merchant.cashfree.com/merchant/sign-up)
  - API keys for different products. You can generate them from your Dashboard

## Usage
### Payouts
The package needs to be configured with your account's secret key which is available in your Cashfree Dashboard.
```js
const Cashfree = require("cashfree-sdk");

//Initialize Cashfree Payout
let Payouts = Cashfree.Payouts;
Payouts.Init({
	"ENV": "TEST", 
	"ClientID": "CF27JBMB8GN4CAAQI6Q",
	"ClientSecret": "fd48e5a6084d611e4fd9c6f0f8fcbcb16d221ace"
});
```
| Option              | Default                       | Description                                                                           |
| ------------------- | ----------------------------- | ------------------------------------------------------------------------------------- |
| `ENV`        | `TEST`                        | Environment to be initialized. Can be set to `TEST` or `PRODUCTION` |
| `ClientID` | `CLIENTID`                             | `ClientID` which can be generated on cashfree dashboard.                  |
| `ClientSecret`         | `CLIENTSECRET`                        | `ClientSecret` which can be found alongside generated `ClientID`.                        |

### Using Promises
Every method returns a promise which can be used:
```js
Payouts.Beneficiary.Add({
	"beneId": "JOHN18012", 
	"name": "john doe",
	"email": "johndoe@cashfree.com", 
	"phone": "9876543210", 
	"bankAccount": "00001111222233", 
	"ifsc": "HDFC0000001", 
	"address1" : "ABC Street", 
	"city": "Bangalore", 
	"state":"Karnataka", 
	"pincode": "560001"
}).then(function(res){
	console.log(res)
});
```

### Using Async/Await
Can also be used synchronously using async/await:

```js
var syncCall = async function (){
	var res = await Payouts.Beneficiary.Add({
	"beneId": "JOHN18012", 
	"name": "john doe",
	"email": "johndoe@cashfree.com", 
	"phone": "9876543210", 
	"bankAccount": "00001111222233", 
	"ifsc": "HDFC0000001", 
	"address1" : "ABC Street", 
	"city": "Bangalore", 
	"state":"Karnataka", 
	"pincode": "560001"
	});
	return res;
}
syncCall();
```
- For more information about the APIs go to [Payouts](Payouts).
- Complete list of [APIs](https://docs.cashfree.com/docs/payout/guide/#fetch-beneficiary-id).
### TODO
- #### PG
- #### Market Place
- #### Autocollect
