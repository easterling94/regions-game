import { AppDispatch, RootState } from '../store';
import api from '../../utils/api';
import { getRegionsLoading, getRegionsError, getRegionsSuccess } from '../slices/regionsSlice';
import { ENVIRONMENT } from '../../utils/project_consts';
import { DATA_IF_SERVER_FAILS } from '../../utils/db_static';

export const regionsThunk = () => (dispatch: AppDispatch, getState: () => RootState) => {
  const environment = getState().environment.environment;

  if (environment === ENVIRONMENT.IS_DEV_MOCK) {
    dispatch(getRegionsSuccess(DATA_IF_SERVER_FAILS.regions))
    return;
  }

  dispatch(getRegionsLoading());
  api.getRegions();

}
