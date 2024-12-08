import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import registerReducer from './slice/registerSlice';


const store = configureStore({
  reducer: {
    auth: authReducer,
    register: registerReducer,
  },
});

export default store;
