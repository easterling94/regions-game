import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TEnvironment, TMode } from '../../utils/sharedTypes';

interface initialState {
  environment: 'idle' | TEnvironment,
  isModalShown: boolean,
  mode: TMode,
}

const initialState: initialState = {
  environment: 'idle',
  isModalShown: false,
  mode: 'home',
}

export const generalSlice = createSlice({
  name: 'environment',
  initialState,
  reducers: {
    setEnvironment: (state, action: PayloadAction<TEnvironment>) => {
      state.environment = action.payload;
    },
    setModal: (state) => {
      state.isModalShown = !state.isModalShown;
    },
    setMode: (state, action: PayloadAction<TMode>) => {
      state.mode = action.payload;
    }
  }
});

export const { setEnvironment } = generalSlice.actions;
export default generalSlice.reducer;