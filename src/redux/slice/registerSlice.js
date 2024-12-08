import { createSlice } from '@reduxjs/toolkit';
import { registerEvent } from '../actions/registerAction';

const initialState = {
    data: null,
    loading: false,
    error: null,
};


const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        registerSuccess: (state, action) => {
            state.register = action.payload;
            state.loading = false;
        },
        registerUpdate: (state, action) => {
            state.register = {
                ...state.register,
                ...action.payload,
            };
            state.loading = false;
        },
        clearRegister: state => {
            state.isAuthenticated = false;
            state.register = null;
        },

    },
    extraReducers: builder => {
        builder
            .addCase(registerEvent.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(registerEvent.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(registerEvent.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Register failed';
            });
    },
});


export const { registerSuccess, clearRegister } = registerSlice.actions;
export const getRegisterData = state => state.register.data;


export default registerSlice.reducer;


