import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface initialState {
  correctCount: number;
  livesCount: number;
  hintsCount: number;
  timerLeft: string;
}

const initialState: initialState = {
  correctCount: 0,
  livesCount: 10,
  hintsCount: 10,
  timerLeft: '00:00',
}

export const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setHint: (state) => {
      state.hintsCount--
    },
    setLives: (state) => {
      state.livesCount--
    },
    setCorrect: (state) => {
      state.correctCount--
    },
    setTimer: (state, action: PayloadAction<string>) => {
      state.timerLeft = action.payload;
    }
  }
});

export const { setHint } = gameSlice.actions;
export default gameSlice.reducer;