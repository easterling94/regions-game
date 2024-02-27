import { createSlice } from '@reduxjs/toolkit';
import { fetchRegionsData } from '../thunks/regionsThunks';
import { TRegion } from '../../utils/sharedTypes';

interface initialState {
  status: 'idle' | 'loading' | 'success' | 'error',
  regions: Array<TRegion> | null,
}

const initialState: initialState = {
  status: 'idle',
  regions: null,
}

export const regionsSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchRegionsData.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(fetchRegionsData.fulfilled, (state, action) => {
      state.status = 'success';
      state.regions = action.payload;
    })
    .addCase(fetchRegionsData.rejected, (state) => {
      state.status = 'error';
    })
  },
});

export default regionsSlice.reducer;