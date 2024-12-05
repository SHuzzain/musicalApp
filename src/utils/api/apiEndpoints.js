export const API_BASE_URL = 'http://localhost:8081';

export const ENDPOINTS = {
  login: '/auth/login',
  register: '/auth/register',
  getUser: userId => `/users/${userId}`,
};
