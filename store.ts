import {configureStore} from '@reduxjs/toolkit';
import historyReducer from './slices/historySlice';
import serviceReducer from './slices/serviceSlice';
import cleaningReducer from './slices/cleaningSlice';

export const store = configureStore({
  reducer: {
    history: historyReducer,
    services: serviceReducer,
    cleaning: cleaningReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
