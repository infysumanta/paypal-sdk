import { Environment } from './constant'
import {
  generateAccessToken,
  getToken,
  terminateAccessToken,
} from './resource/Authorization'
import { getRequestUrl } from './utils'

export class Paypal {
  clientId: string
  clientSecret: string
  environment: Environment
  requestUrl: string

  authorization: {
    generateAccessToken: () => Promise<any>
    getToken: () => Promise<string>
    terminateAccessToken: (token: string) => Promise<any>
  }
  orders: {}
  payments: {}
  invoices: {}
  template: {}
  products: {}
  plans: {}
  subscriptions: {}
  payouts: {}
  webhooks: {}
  shipmentTracking: {}
  transactionSearch: {}
  disputes: {}
  paymentMethodsTokens: {}

  constructor({
    clientId,
    clientSecret,
    environment,
  }: {
    clientId: string
    clientSecret: string
    environment: Environment
  }) {
    this.clientId = clientId
    this.clientSecret = clientSecret
    this.environment = environment
    this.requestUrl = getRequestUrl(environment)

    // method binding
    this.authorization = this._authorization
    this.orders = {}
    this.payments = {}
    this.invoices = {}
    this.template = {}
    this.products = {}
    this.plans = {}
    this.subscriptions = {}
    this.payouts = {}
    this.webhooks = {}
    this.shipmentTracking = {}
    this.transactionSearch = {}
    this.disputes = {}
    this.paymentMethodsTokens = {}
  }

  private _authorization = {
    generateAccessToken: async () =>
      await generateAccessToken(
        this.clientId,
        this.clientSecret,
        this.requestUrl
      ),
    getToken: async () =>
      await getToken(this.clientId, this.clientSecret, this.requestUrl),
    terminateAccessToken: async (token: string) =>
      await terminateAccessToken(token, this.requestUrl),
  }

  private async getToken() {
    return await getToken(this.clientId, this.clientSecret, this.requestUrl)
  }

  private async revokeToken(token: string): Promise<void> {
    await terminateAccessToken(token, this.requestUrl)
  }
}
