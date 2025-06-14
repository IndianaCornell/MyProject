import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getHistory} from '../api/api';

export const fetchHistory = createAsyncThunk('history/fetch', async () => {
  const data = await getHistory();
  return data;
});

const historySlice = createSlice({
  name: 'history',
  initialState: {
    list: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchHistory.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchHistory.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Помилка завантаження';
      });
  },
});

export default historySlice.reducer;
