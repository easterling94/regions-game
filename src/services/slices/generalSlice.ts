import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState = {
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {}
});

export const {  } = generalSlice.actions;
export default generalSlice.reducer;