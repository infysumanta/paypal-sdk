import axios, { AxiosRequestConfig } from 'axios'
import { post } from '../utils'

export async function generateAccessToken(
  clientId: string,
  clientSecret: string,
  requestUrl: string
): Promise<{
  access_token: string
  token_type: string
  app_id: string
  expires_in: number
  nonce: string
  scope: string
}> {
  let config: AxiosRequestConfig = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${requestUrl}/v1/oauth2/token`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    data: {
      grant_type: 'client_credentials',
      ignoreCache: 'true',
      return_authn_schemes: 'true',
      return_client_metadata: 'true',
      return_unconsented_scopes: 'true',
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  }
  const response = await axios(config)
  return response.data
}

export async function getToken(
  clientId: string,
  clientSecret: string,
  requestUrl: string
): Promise<string> {
  const token = await generateAccessToken(clientId, clientSecret, requestUrl)
  return token.access_token
}

export async function terminateAccessToken(
  token: string,
  requestUrl: string
): Promise<void> {
  await post({
    url: `${requestUrl}/v1/oauth2/token/terminate`,
    header: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Bearer ' + token,
    },
    data: {
      token: token,
      token_type_hint: 'ACCESS_TOKEN',
    },
  })
}

// @todo: imeplement the following methods userInfo
export async function userInfo() {
  console.log('userInfo')
}

// @todo: imeplement the following methods generateClientToken
export async function generateClientToken() {
  console.log('generateClientToken')
}
