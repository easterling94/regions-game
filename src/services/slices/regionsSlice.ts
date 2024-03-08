import { createSlice } from '@reduxjs/toolkit';
import { fetchRegionsData } from '../thunks/regionsThunks';
import { TRegion, LOAD_STATUSES } from '../../utils/sharedTypes';

interface initialState {
  status: LOAD_STATUSES,
  regions: Array<TRegion> | null,
}

const initialState: initialState = {
  status: LOAD_STATUSES.IDLE,
  regions: null,
}

export const regionsSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(fetchRegionsData.pending, (state) => {
      state.status = LOAD_STATUSES.LOADING
    })
    .addCase(fetchRegionsData.fulfilled, (state, action) => {
      state.status = LOAD_STATUSES.SUCCESS;
      state.regions = action.payload;
    })
    .addCase(fetchRegionsData.rejected, (state) => {
      state.status = LOAD_STATUSES.ERROR;
    })
  },
});

export default regionsSlice.reducer;