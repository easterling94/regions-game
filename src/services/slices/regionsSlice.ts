import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { 
  fetchRegionsData,
  createRegionsData,
  deleteRegionsData,
  editRegionsData
} from '../thunks/regionsThunks';
import { TRegion, LOAD_STATUSES, TForm, TFormPayload } from '../../utils/sharedTypes';

interface initialState {
  status: LOAD_STATUSES,
  regions: Array<TRegion> | null,
  form: TForm,
}



const initialState: initialState = {
  status: LOAD_STATUSES.IDLE,
  regions: null,
  form: {
    id: null,
    REGION_NAME: '',
    REGION_CODES: '',
  },
}

export const regionsSlice = createSlice({
  name: 'regions',
  initialState,
  reducers: {
    setForm: (state, action: PayloadAction<TFormPayload>) => {
      switch (action.payload.type) {
        case 'id':
        state.form.id = action.payload.payload
        break;
        case 'REGION_NAME':
        state.form.REGION_NAME = action.payload.payload
        break;
        case 'REGION_CODES':
        state.form.REGION_CODES = action.payload.payload
        break;
        default: return
      }
    },
    clearForm: (state) => {
      state.form = initialState.form;
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

export const { setForm, clearForm } = regionsSlice.actions;
export default regionsSlice.reducer;