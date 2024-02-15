import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { TEnvironment, ENVIRONMENT, IS_LOCALHOST } from '../../utils/project_consts';
import { setEnvironment } from '../slices/environmentSlice';
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
