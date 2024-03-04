import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TBoard } from '../../utils/sharedTypes';

interface initialState {
  correctCount: number;
  livesCount: number;
  hintsCount: number;
  timerLeft: string;
  board: TBoard;
}

const initialState: initialState = {
  correctCount: 0,
  livesCount: 10,
  hintsCount: 10,
  timerLeft: '03:00',
  board: {
    ans1: '',
    ans2: '',
    ans3: '',
    ans4: '',
    next: false,
  },
}

export const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setCorrect: (state) => {
      state.correctCount++;
      state.board = initialState.board;
    },
    setLives: (state) => {
      state.livesCount--;
      state.board = initialState.board;
    },
    setHint: (state) => {
      state.hintsCount--;
    },
    setTimer: (state, action: PayloadAction<string>) => {
      state.timerLeft = action.payload;
    },
    setBoard: (state, action: PayloadAction<TBoard>) => {
      state.board = action.payload;
    },
    reset:(state) => {
      state.board = initialState.board;
    }
  }
});

export const { setHint, setLives, setCorrect, setTimer, setBoard, reset } = gameSlice.actions;
export default gameSlice.reducer;