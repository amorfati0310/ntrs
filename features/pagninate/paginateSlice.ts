import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PaginateState {
  paginate: number;
  loading: boolean;
  errors: string;
}

const initialState: PaginateState = {
  paginate: 1,
  loading: false,
  errors: '',
};

const paginateSlice = createSlice({
  name: 'paginate',
  initialState,
  reducers: {
    setPage(state, { payload }: PayloadAction<number>) {
      state.paginate = payload || 1;
    },
  },
});

export const { setPage } = paginateSlice.actions;

export default paginateSlice.reducer;

export const paginateSelector = (state: PaginateState): number => state.paginate;
