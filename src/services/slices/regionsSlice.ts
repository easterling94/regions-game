import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
  fetchRegionsData,
  createRegionsData,
  deleteRegionsData,
  editRegionsData
} from '../thunks/regionsThunks';
import { TRegion, LOAD_STATUSES } from '../../utils/sharedTypes';

interface initialState {
  status: LOAD_STATUSES,
  regions: Array<TRegion> | null,
  form: TForm
}

type TForm = {
  name: string,
  codes: string,
};

const initialState: initialState = {
  status: LOAD_STATUSES.IDLE,
  regions: null,
  form: {
    name: '',
    codes: '',
  },
}

export const regionsSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<TForm & {}>) => {
      state.form = action.payload;
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