import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState, useAppDispatch } from '../store';
import { IS_LOCALHOST } from '../../utils/project_consts';
import { TEnvironment, ENVIRONMENT, TRegionRaw, TRegion } from '../../utils/sharedTypes';
import { setEnvironment } from '../slices/generalSlice';
import api from '../../utils/api';
import { DATA_IF_SERVER_FAILS } from '../../utils/db_static';

export const fetchRegionsData = createAsyncThunk(
  'regions/fetchRegionsData',
  async (env: TEnvironment, {dispatch}) => {
    let response;
    if (env === ENVIRONMENT.IS_DEV) {
      try {
        response = await api.getRegionsDev();
        return response.regions;
      }
      catch {
        dispatch(setEnvironment(ENVIRONMENT.IS_DEV_MOCK))
      }
    }
    else {
      try {
        response = await api.getRegionsProd();
        return response.regions;
      }
      catch {
        dispatch(setEnvironment(ENVIRONMENT.IS_PROD_MOCK))
      }
    }

    if(!response) return DATA_IF_SERVER_FAILS.regions;
  }
);

export const createRegionsData = createAsyncThunk(
  'regions/createRegionsData', 
  async (newReg: TRegionRaw, thunkApi) => {
    const { general: {environment}, regions: {regions} } = thunkApi.getState() as RootState;
    const newRegionPrepared = {...newReg, REGION_CODES: newReg.REGION_CODES.split(', ')};
    if (environment === 'IS_DEV') {
      console.log('дев с бэком');
    } else if (environment === 'IS_DEV_MOCK') {
      console.log('дев без бэка, с моком');
      // заменить 100 на макс id из регионов если моки
      return [...regions!, {...newRegionPrepared, id: 100}];
    } else if (environment === 'IS_PROD') {
      console.log('прод с бэком');
    } else if (environment === 'IS_PROD_MOCK') {
      console.log('прод без бэка, с моком');
    }
    console.log(environment);
  }
);

export const deleteRegionsData = createAsyncThunk(
  'regions/deleteRegionsData', 
  async (deleteReg: TRegion, thunkApi) => {
    const { general: {environment}, regions: {regions} } = thunkApi.getState() as RootState;
    const newRegList = [...regions!].filter(el => el.id !==deleteReg.id);
    if (environment === 'IS_DEV') {
      console.log('дев с бэком');
    } else if (environment === 'IS_DEV_MOCK') {
      console.log('дев без бэка, с моком');
      // заменить 100 на макс id из регионов если моки
      return newRegList;
    } else if (environment === 'IS_PROD') {
      console.log('прод с бэком');
    } else if (environment === 'IS_PROD_MOCK') {
      console.log('прод без бэка, с моком');
    }
    console.log(environment);
  }
);

export const editRegionsData = createAsyncThunk(
  'regions/editRegionsData', 
  async (deleteReg: TRegion, thunkApi) => {
    const { general: {environment}, regions: {regions} } = thunkApi.getState() as RootState;
    const newRegList = [...regions!].filter(el => el.id !==deleteReg.id);
    if (environment === 'IS_DEV') {
      console.log('дев с бэком');
    } else if (environment === 'IS_DEV_MOCK') {
      console.log('дев без бэка, с моком');
      // заменить 100 на макс id из регионов если моки
      return newRegList;
    } else if (environment === 'IS_PROD') {
      console.log('прод с бэком');
    } else if (environment === 'IS_PROD_MOCK') {
      console.log('прод без бэка, с моком');
    }
    console.log(environment);
  }
);

export const initialThunk = () => async (dispatch: AppDispatch) => {

  if (IS_LOCALHOST) {
    dispatch(setEnvironment(ENVIRONMENT.IS_DEV))
    dispatch(fetchRegionsData(ENVIRONMENT.IS_DEV))
    return;
  }

  if (!IS_LOCALHOST) {
    dispatch(setEnvironment(ENVIRONMENT.IS_PROD))
    dispatch(fetchRegionsData(ENVIRONMENT.IS_PROD));
    return
  }
  
}
