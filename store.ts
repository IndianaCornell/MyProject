import {configureStore} from '@reduxjs/toolkit';
import historyReducer from './slices/historySlice';
import serviceReducer from './slices/serviceSlice';

export const store = configureStore({
  reducer: {
    history: historyReducer,
    services: serviceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
