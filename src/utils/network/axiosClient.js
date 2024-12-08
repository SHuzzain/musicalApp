import axios from 'axios';
import { USER_TOKEN } from '../helpers/storage';
import { API_BASE_URL } from '../api/apiEndpoints';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor
apiClient.interceptors.request.use(
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
apiClient.interceptors.response.use(
  response => response,
  error => {
    // Handle global errors here
    console.error('API Error:', error.response);
    return Promise.reject(error);
  },
);

export { apiClient };
