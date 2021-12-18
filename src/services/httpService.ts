import axios, { AxiosResponse } from 'axios';
const instance = axios.create({
  baseURL: 'https://fvaly.herokuapp.com/api',
  timeout: 15000,
});
const responseBody = (response: AxiosResponse) => response.data.data;
// const get = (url: string) => instance.get(url).then(responseBody)

// const post = (url: string, body: object) => instance.post(url, body).then(responseBody)

// const patch = (url: string, body: object) => instance.patch(url, body).then(responseBody)

const request = {
  get: (url: string) => instance.get(url).then(responseBody),
  post: (url: string, body: object) =>
    instance.post(url, body).then(responseBody),
  patch: (url: string, body: object) =>
    instance.patch(url, body).then(responseBody),
  delete: (url: string) => instance.get(url).then(responseBody),
};

export default request;
