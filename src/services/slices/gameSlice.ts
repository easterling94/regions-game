import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { TBoard, TRegion } from '../../utils/sharedTypes';
import { LIVE_COUNTER, CORRECT_COUNTER, TIMER_START, HINT_COUNTER } from '../../utils/project_consts';

interface initialState {
  correctCount: number;
  livesCount: number;
  hintsCount: number;
  timerLeft: string;
  board: TBoard;
  isModalShown: boolean;
  currentRegion: null | TRegion;
}

const initialState: initialState = {
  correctCount: CORRECT_COUNTER,
  livesCount: LIVE_COUNTER,
  hintsCount: HINT_COUNTER,
  timerLeft: TIMER_START,
  board: {
    ans1: '',
    ans2: '',
    ans3: '',
    ans4: '',
    next: false,
  },
  isModalShown: false,
  currentRegion: null,
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
      state.currentRegion === null ? state.timerLeft = TIMER_START : state.timerLeft = action.payload;
    },
    setBoard: (state, action: PayloadAction<TBoard>) => {
      state.board = action.payload;
    },
    reset: () => {
      return initialState;
    },
    setModal: (state) => {
      state.isModalShown = !state.isModalShown;
    },
    setCurrentRegion: (state, action: PayloadAction<TRegion>) => {
      state.currentRegion = action.payload;
    },
  }
});

export const { setHint, setLives, setCorrect, setTimer, setBoard, reset, setModal, setCurrentRegion } = gameSlice.actions;
export default gameSlice.reducer;