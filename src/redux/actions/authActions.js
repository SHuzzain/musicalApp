import { createAsyncThunk } from '@reduxjs/toolkit';
import { USER_TOKEN } from '../../utils/helpers/storage';
import authApi from '../../utils/api/AuthApi';

// Login thunk
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async credentials => {
    try {
      console.log({ credentials });
      const response = await authApi.login(credentials);

      console.log({ response });

      await USER_TOKEN.set(JSON.stringify(credentials));
      return response.user;
    } catch (error) {
      console.log({ error });
      throw new Error('Login failed');
    }
  },
);


export const restoreSession = createAsyncThunk(
  'auth/loginUser',
  async (_, { dispatch }) => {
    try {
      const data = await USER_TOKEN.get();
      const credentials = JSON.parse(data);
      console.log({ credentials });
      if (credentials?.email) {
        dispatch(loginUser(credentials));

      } else {
        throw new Error('No token found');
      }
    } catch (error) {
      dispatch(logoutThunk());
    }
  },
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { dispatch }) => {
    await USER_TOKEN.delete();
    dispatch({ type: 'auth/logout' });
  },
);
