import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { clearForm, setForm } from '../slices/regionsSlice';
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

export const handleDataForm =<T extends TRegion & TRegionRaw> (newReg: T) => (dispatch: AppDispatch) => {
  if (newReg.id) {
    console.log(newReg);
    const newRegionPrepared = {...newReg, REGION_CODES: newReg.REGION_CODES.split(', ')}
    dispatch(editRegionsData(newRegionPrepared));
    return;
  } else {
    dispatch(createRegionsData(newReg));
    return;
  }
};

export const editRegionsDataForm = (editReg: TRegion) => (dispatch: AppDispatch, getState: () => RootState) => {
  const { form } = getState().regions;
  dispatch(setForm({type: 'id', payload: editReg.id}));
  dispatch(setForm({type: 'REGION_NAME', payload: editReg.REGION_NAME}));
  dispatch(setForm({type: 'REGION_CODES', payload: editReg.REGION_CODES.join(', ')}));
}

export const createRegionsData = createAsyncThunk(
  'regions/createRegionsData', 
  async (newReg: TRegionRaw, thunkApi) => {
    const { general: {environment}, regions: {regions} } = thunkApi.getState() as RootState;
    const dispatch = thunkApi.dispatch;
    dispatch(clearForm());
    if (environment === ENVIRONMENT.IS_DEV) {
      console.log('дев с бэком');
      return;
    } else if (environment === ENVIRONMENT.IS_DEV_MOCK) {
      console.log('дев без бэка, с моком');
      const newRegionPrepared = {...newReg, REGION_CODES: newReg.REGION_CODES.split(', ')};
      return [...regions!, {...newRegionPrepared, id: regions!.length + 1}];
    } else if (environment === ENVIRONMENT.IS_PROD) {
      console.log('прод с бэком');
      return;
    } else if (environment === ENVIRONMENT.IS_PROD_MOCK) {
      console.log('прод без бэка, с моком');
      const newRegionPrepared = {...newReg, REGION_CODES: newReg.REGION_CODES.split(', ')};
      return [...regions!, {...newRegionPrepared, id: regions!.length + 1}];
    }
  }
);

export const deleteRegionsData = createAsyncThunk(
  'regions/deleteRegionsData', 
  async (deleteReg: TRegion, thunkApi) => {
    const { general: {environment}, regions: {regions} } = thunkApi.getState() as RootState;
    if (environment === ENVIRONMENT.IS_DEV) {
      console.log('дев с бэком');
      return;
    } else if (environment === ENVIRONMENT.IS_DEV_MOCK) {
      console.log('дев без бэка, с моком');
      const newRegList = [...regions!].filter(el => el.id !==deleteReg.id);
      return newRegList;
    } else if (environment === ENVIRONMENT.IS_PROD) {
      console.log('прод с бэком');
      return;
    } else if (environment === ENVIRONMENT.IS_PROD_MOCK) {
      console.log('прод без бэка, с моком');
      const newRegList = [...regions!].filter(el => el.id !==deleteReg.id);
      return newRegList;
    }
  }
);

export const editRegionsData = createAsyncThunk(
  'regions/editRegionsData', 
  async (editReg: TRegion, thunkApi) => {
    const dispatch = thunkApi.dispatch;
    dispatch(clearForm());
    const { general: {environment}, regions: {regions} } = thunkApi.getState() as RootState;
    if (environment === ENVIRONMENT.IS_DEV) {
      console.log('дев с бэком');
      return;
    } else if (environment === ENVIRONMENT.IS_DEV_MOCK) {
      const newRegList = [...regions!].map(el => el.id === editReg.id ? editReg : el).sort((reg1, reg2) => reg1.id! - reg2.id!);
      console.log('дев без бэка, с моком');
      return newRegList;
    } else if (environment === ENVIRONMENT.IS_PROD) {
      console.log('прод с бэком');
      return;
    } else if (environment === ENVIRONMENT.IS_PROD_MOCK) {
      console.log('прод без бэка, с моком');
    }
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
