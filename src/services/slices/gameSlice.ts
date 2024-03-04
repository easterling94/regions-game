import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TBoard } from '../../utils/sharedTypes';

interface initialState {
  correctCount: number;
  livesCount: number;
  hintsCount: number;
  timerLeft: string;
  board: TBoard;
  isModalShown: boolean,
}

const initialState: initialState = {
  correctCount: 0,
  livesCount: 10,
  hintsCount: 10,
  timerLeft: '00:10',
  board: {
    ans1: '',
    ans2: '',
    ans3: '',
    ans4: '',
    next: false,
  },
  isModalShown: false,
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
    reset: (state) => {

    },
    setModal: (state) => {
      state.isModalShown = !state.isModalShown;
    },
  }
});

export const { setHint, setLives, setCorrect, setTimer, setBoard, reset, setModal } = gameSlice.actions;
export default gameSlice.reducer;