import { configureStore } from '@reduxjs/toolkit';
import regionsReducer from './slices/regionsSlice';
import { useDispatch, useSelector, TypedUseSelectorHook  } from 'react-redux';

export const store = configureStore({
  reducer: {
    regions: regionsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;