import axios from 'axios';
import { USER_TOKEN } from '../helpers/storage';
import { API_BASE_URL } from '../api/apiEndpoints';

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
axiosClient.interceptors.request.use(
  config => {
    let token;
    USER_TOKEN.get().then(value => {
      token = value;
    });
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  error => Promise.reject(error),
);

// Response Interceptor
axiosClient.interceptors.response.use(
  response => response.data,
  error => {
    // Handle global errors here
    console.error('API Error:', error.response);
    return Promise.reject(error);
  },
);

export { axiosClient };
