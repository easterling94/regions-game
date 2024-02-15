import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TEnvironment } from '../../utils/project_consts';

interface initialState {
  environment: 'idle' | TEnvironment;
}

const initialState: initialState = {
  environment: 'idle',
}

export const environmentSlice = createSlice({
  name: 'environment',
  initialState,
  reducers: {
    setEnvironment: (state, action: PayloadAction<TEnvironment>) => {
      state.environment = action.payload
    }
  }
});

export const { setEnvironment } = environmentSlice.actions;
export default environmentSlice.reducer;