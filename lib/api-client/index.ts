// import fetch       from 'isomorphic-fetch';
// import queryString from 'query-string';
// import Promise     from 'bluebird';
// import type { NextApiRequest, NextApiResponse } from 'next'

export default class ApiClient {
  request;

  get(requestUrl, payload = {}, params = {}) {
    return this.request({
      url: requestUrl,
      method: 'get',
      body: payload,
      params,
    }).res.json();
  }

  put(requestUrl, payload = {}) {
    return this.request({
      url: requestUrl,
      method: 'put',
      body: payload,
    });
  }

  patch(requestUrl, payload = {}) {
    return this.request({
      url: requestUrl,
      method: 'put',
      body: payload,
    });
  }

  post(requestUrl, payload = {}) {
    console.log('post', payload);
    return this.request({
      url: requestUrl,
      method: 'post',
      body: payload,
    });
  }

  delete(requestUrl) {
    return this.request({
      url: requestUrl,
      method: 'delete',
    });
  }
}
