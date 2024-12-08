import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_TOKEN } from '../../utils/helpers/storage';
import axios from 'axios';
import { ENDPOINTS } from '../../utils/api/apiEndpoints';

// Login thunk
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async credentials => {
    try {
      // const response = await axios.post(ENDPOINTS.login, credentials);
      // await USER_TOKEN.set(response.token);

      // Dispatch success action
      return credentials;
    } catch (error) {
      throw new Error('Login failed');
    }
  },
);


export const restoreSession = createAsyncThunk(
  'auth/loginUser',
  async (_, { dispatch }) => {
    try {
      const token = await USER_TOKEN.get();
      console.log({ token });

      if (token) {
        const user = await fetchUserInfo(token);
        return user;
      } else {
        throw new Error('No token found');
      }
    } catch (error) {
      dispatch(logoutThunk());
    }
  },
);

// Simulate fetching user info (replace with actual API)
async function fetchUserInfo(_token) {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          id: '1',
          name: 'dummy',
          email: 'dummy@example.com',
        }),
      1000,
    ),
  );
}

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch }) => {
    await USER_TOKEN.delete();
    dispatch({ type: 'auth/logout' });
  },
);
