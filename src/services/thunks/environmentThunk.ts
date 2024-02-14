import { AppDispatch, RootState } from '../store';
import { setEnvironment } from '../slices/environmentSlice';
import api from '../../utils/api';
import { ENVIRONMENT, IS_LOCALHOST } from '../../utils/project_consts';

export const environmentThunk = () => async (dispatch: AppDispatch, getState: () => RootState) => {
  
  const is_back_available = await api.testIfBackendAvailable();

  if (IS_LOCALHOST && is_back_available) {
    dispatch(setEnvironment(ENVIRONMENT.IS_DEV))
    return;
  }
  if (IS_LOCALHOST && !is_back_available) {
    dispatch(setEnvironment(ENVIRONMENT.IS_DEV_MOCK))
    return;
  }
}