import axios from 'axios';
import { Environment, liveUrl, sandboxUrl } from './constant';
export const getRequestUrl = (environment: Environment) => {
  return environment === 'sandbox' ? sandboxUrl : liveUrl;
};

export const getAuthenticationToken = async (
  requestUrl: string,
  clientId: string,
  clientSecret: string,
) => {
  const token = await axios({
    method: 'POST',
    url: `${requestUrl}/v1/oauth2/token`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: {
      grant_type: 'client_credentials',
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  });
  const access_token = token.data.access_token;
  return access_token;
};
