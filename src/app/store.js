import { configureStore } from '@reduxjs/toolkit';
import salesReducer from '../features/salesSlice';

export const store = configureStore({
  reducer: {
    sales: salesReducer,
  },
});
