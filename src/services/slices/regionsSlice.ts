import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Tregion } from '../../utils/sharedTypes';


interface initialState {
  status: 'idle' | 'loading' | 'success' | 'error',
  data: Array<Tregion> | null
}

const initialState: initialState = {
  status: 'idle',
  data: null
}

export const regionsSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {
    getRegionsLoading: (state) => {
      state.status = 'loading'
    },
    getRegionsSuccess: (state, action: PayloadAction<Array<Tregion>>) => {
      state.status = 'success',
      state.data = action.payload
    },
    getRegionsError: (state) => {
      state.status = 'error'
    }
  }
});

export const { getRegionsLoading, getRegionsSuccess, getRegionsError } = regionsSlice.actions;
export default regionsSlice.reducer;