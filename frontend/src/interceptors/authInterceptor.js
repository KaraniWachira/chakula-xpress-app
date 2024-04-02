/**
 * Interceptor for adding authentication token to outgoing requests.
 * @param {Object} req - The request object.
 * @returns {Object} - The modified request object.
 */

import axios from 'axios';

axios.interceptors.request.use(
  req => {
    const user = localStorage.getItem('user');
    const token = user && JSON.parse(user).token;
    if (token) {
      req.headers['access_token'] = token;
    }
    return req;
  },
  error => {
    return Promise.reject(error);
  }
);










