import { AppDispatch } from '../store';
import api from '../../utils/api';
import { getRegionsLoading, getRegionsError, getRegionsSuccess } from '../slices/regionsSlice';
import { IS_PRODUCTION, IS_DEV, IS_PROD } from '../../utils/project_consts';

export const getDataThunk = () => (dispatch: AppDispatch) => {
  if (IS_PRODUCTION === IS_DEV) {

  }
  dispatch(getRegionsLoading());
  api.getRegions();

}
