import { configureStore } from '@reduxjs/toolkit';
import regionsReducer from './slices/regionsSlice';
import generalReducer from './slices/generalSlice';
import gameReducer from './slices/gameSlice';
import { useDispatch, useSelector, TypedUseSelectorHook  } from 'react-redux';

export const store = configureStore({
  reducer: {
    general: generalReducer,
    regions: regionsReducer,
    game: gameReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;