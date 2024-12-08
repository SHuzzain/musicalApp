import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ENDPOINTS } from '../../utils/api/apiEndpoints';

// Login thunk
export const registerEvent = createAsyncThunk(
    'register/registerEvent',
    async data => {
        try {
            // const response = await axios.post(ENDPOINTS.register, data);
            // await USER_TOKEN.set(response.token);

            // Dispatch success action
            return data;
        } catch (error) {
            throw new Error('Register failed');
        }
    },
);
