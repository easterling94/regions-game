import { configureStore } from '@reduxjs/toolkit';
import generalReducer from './slices/generalSlice';
import regionsReducer from './slices/regionsSlice';
import environmentReducer from './slices/environmentSlice';
import { useDispatch, useSelector, TypedUseSelectorHook  } from 'react-redux';

export const store = configureStore({
  reducer: {
    general: generalReducer,
    environment: environmentReducer,
    regions: regionsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;