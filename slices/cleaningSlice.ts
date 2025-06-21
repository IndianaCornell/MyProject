import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface CleaningState {
  power: 'eco' | 'medium' | 'strong';
  moisture: 'low' | 'medium' | 'high';
}

const initialState: CleaningState = {
  power: 'strong',
  moisture: 'medium',
};

const cleaningSlice = createSlice({
  name: 'cleaning',
  initialState,
  reducers: {
    setPower(state, action: PayloadAction<CleaningState['power']>) {
      state.power = action.payload;
    },
    setMoisture(state, action: PayloadAction<CleaningState['moisture']>) {
      state.moisture = action.payload;
    },
  },
});

export const {setPower, setMoisture} = cleaningSlice.actions;
export default cleaningSlice.reducer;
