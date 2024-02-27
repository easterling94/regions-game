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
  timerLeft: '03:00',
}

export const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setCorrect: (state, action: PayloadAction<number>) => {
      state.correctCount + action.payload;
    },
    setLives: (state, action: PayloadAction<number>) => {
      state.livesCount - action.payload
    },
    setHint: (state) => {
      state.hintsCount--;
    },
    setTimer: (state, action: PayloadAction<string>) => {
      state.timerLeft = action.payload;
    }
  }
});

export const { setHint, setLives, setCorrect, setTimer } = gameSlice.actions;
export default gameSlice.reducer;