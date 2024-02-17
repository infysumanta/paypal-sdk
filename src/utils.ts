import axios, { AxiosHeaderValue } from 'axios'
import { Environment, liveUrl, sandboxUrl } from './constant'

export const getRequestUrl = (environment: Environment) => {
  return environment === 'sandbox' ? sandboxUrl : liveUrl
}

const request = async (method: string, url: string, header: any, data: any) => {
  const config = {
    method: method,
    maxBodyLength: Infinity,
    url: url,
    headers: header,
    data: data,
  }
  const response = await axios(config)
  return response
}

export const get = async ({
  url,
  header,
  data,
}: {
  url: string
  header: any
  data: any
}) => {
  const response = await request('get', url, header, data)
  return response
}
export const post = async ({
  url,
  header,
  data,
}: {
  url: string
  header: any
  data: any
}) => {
  const response = await request('post', url, header, data)
  return response
}
