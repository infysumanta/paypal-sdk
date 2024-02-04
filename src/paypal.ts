import { Environment } from './constant';
import { generateAccessToken } from './resource/Authorization';
import { getAuthenticationToken, getRequestUrl } from './utils';

export class Paypal {
  clientId: string;
  clientSecret: string;
  environment: Environment;
  requestUrl: string;


  authorization: {};
  orders: {};
  payments: {};
  invoices: {};
  subscriptions: {};
  payouts: {};
  webhooks: {};
  shipmentTracking: {};
  transactionSearch: {};
  disputes: {};
  paymentMethodsTokens: {};



  constructor(
    clientId: string,
    clientSecret: string,
    environment: Environment,
  ) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.environment = environment;
    this.requestUrl = getRequestUrl(environment);


    // method binding
    this.authorization=this._authorization;
    this.orders={};
    this.payments={};
    this.invoices={};
    this.subscriptions={};
    this.payouts={};
    this.webhooks={};
    this.shipmentTracking={};
    this.transactionSearch={};
    this.disputes={};
    this.paymentMethodsTokens={};
  }


  private _authorization = {
    generateAccessToken: async() => await generateAccessToken(this.clientId, this.clientSecret, this.environment, this.requestUrl),
  }
}
