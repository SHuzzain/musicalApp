export const API_BASE_URL = 'http://192.168.0.119:3000/api/';

export const ENDPOINTS = {
  login: 'auth/login',
  register: 'auth/register',
  getUser: userId => `users/${userId}`,
};
