import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
  fetchRegionsData,
  createRegionsData,
  deleteRegionsData,
  editRegionsData
} from '../thunks/regionsThunks';
import { TRegion, LOAD_STATUSES, TRegionRaw, TRegionRawPayload } from '../../utils/sharedTypes';

interface initialState {
  status: LOAD_STATUSES,
  regions: Array<TRegion> | null,
  form: TRegionRaw
}



const initialState: initialState = {
  status: LOAD_STATUSES.IDLE,
  regions: null,
  form: {
    REGION_NAME: '',
    REGION_CODES: '',
  },
}

export const regionsSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<TRegionRawPayload>) => {
      console.log(action.payload);
      state.form[action.payload.type] = action.payload.payload;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchRegionsData.pending, (state) => {
      state.status = LOAD_STATUSES.LOADING
    })
    .addCase(fetchRegionsData.fulfilled, (state, action) => {
      state.status = LOAD_STATUSES.SUCCESS;
      state.regions = action.payload;
    })
    .addCase(fetchRegionsData.rejected, (state) => {
      state.status = LOAD_STATUSES.ERROR;
    })
    .addCase(createRegionsData.fulfilled, (state, action) => {
      state.status = LOAD_STATUSES.SUCCESS;
      state.regions = action.payload!;
    })
    .addCase(deleteRegionsData.fulfilled, (state, action) => {
      state.status = LOAD_STATUSES.SUCCESS;
      state.regions = action.payload!;
    })
    .addCase(editRegionsData.fulfilled, (state, action) => {
      state.status = LOAD_STATUSES.SUCCESS;
      state.regions = action.payload!;
    })
  },
});

export const { setForm } = regionsSlice.actions;
export default regionsSlice.reducer;