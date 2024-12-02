import AsyncStorage from '@react-native-async-storage/async-storage';
import {createAsyncThunk} from '@reduxjs/toolkit';

// Login thunk
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials: {email: string; password: string}) => {
    try {
      const response = await fakeApiLogin(credentials);

      await AsyncStorage.setItem('authToken', response.token);

      // Dispatch success action
      return response.user;
    } catch (error) {
      throw new Error('Login failed');
    }
  },
);

async function fakeApiLogin(credentials: {
  email: string;
  password: string;
}): Promise<{
  token: string;
  user: {id: string; name: string; email: string};
}> {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          token: 'dummy-token',
          user: {id: '1', name: 'John Doe', email: credentials.email},
        }),
      1000,
    ),
  );
}

export const restoreSession = createAsyncThunk(
  'auth/loginUser',
  async (_, {dispatch}) => {
    try {
      const token = await AsyncStorage.getItem('authToken');
      console.log({token});

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
async function fetchUserInfo(_token: string): Promise<{
  id: string;
  name: string;
  email: string;
}> {
  return new Promise(resolve =>
    setTimeout(
      () =>
        resolve({
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
        }),
      1000,
    ),
  );
}

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, {dispatch}) => {
    await AsyncStorage.removeItem('authToken');
    dispatch({type: 'auth/logout'});
  },
);
