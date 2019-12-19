//Payouts main
let Utils = require('../utils')
let {SelfWithdrawal, GetBalance} = require("./Common.js")
let Beneficiary = require('./Beneficiary')
let Transfers = require('./Transfers')
let Validation = require('./Validation')
let Cashgram = require('./Cashgram')
let PayoutConstants = require('./constants')


let ENV = "TEST";

let SetEnv = function(en){
    PayoutConstants.initialize(en)
}

let Init = async function(initObj) {
	SetEnv(initObj.ENV)
	if (initObj.ClientID !== undefined && initObj.ClientSecret !== undefined) {
		PayoutConstants.setClientId(initObj.ClientID)
		PayoutConstants.setClientSecret(initObj.ClientSecret)
	} else {
		console.log("ClientID or ClientSecret not defined")
	}
}

module.exports = {Beneficiary, SetEnv, Init, Transfers, SelfWithdrawal, GetBalance, Validation, Cashgram};
