import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getServices} from '../api/api';

export const fetchServices = createAsyncThunk('services/fetch', async () => {
  const data = await getServices();
  return data;
});

const serviceSlice = createSlice({
  name: 'services',
  initialState: {
    list: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchServices.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Помилка завантаження';
      });
  },
});

export default serviceSlice.reducer;
