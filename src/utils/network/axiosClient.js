import axios from 'axios';
import { API_BASE_URL } from '../api/apiEndpoints';

const axiosClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Accept: '*',
  },
});

// Request Interceptor
axiosClient.interceptors.request.use(
  async config => {
    // let token;
    // await USER_TOKEN.get().then(value => {
    //   token = value;
    // });
    // if (token) {
    //   config.headers.Authorization = token;
    // }
    return config;
  },
  error => Promise.reject(error),
);

// Response Interceptor
axiosClient.interceptors.response.use(
  response => response.data,
  error => {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('API Error:', error.response.data || error.response);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received:', error.request);
    } else {
      // Something happened in setting up the request
      console.error('Error in request setup:', error.message);
    }
    return Promise.reject(error);
  }
);


export { axiosClient };
