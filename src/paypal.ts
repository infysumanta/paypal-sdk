import { Environment } from './constant';
import { getAuthenticationToken, getRequestUrl } from './utils';

export class Paypal {
  clientId: string;
  clientSecret: string;
  environment: Environment;
  requestUrl: string;
  accessToken: string | undefined;

  constructor(
    clientId: string,
    clientSecret: string,
    environment: Environment,
  ) {
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.environment = environment;
    this.requestUrl = getRequestUrl(environment);
  }

  public async init() {
    const token = await getAuthenticationToken(
      this.requestUrl,
      this.clientId,
      this.clientSecret,
    );
    return token;
  }
}
