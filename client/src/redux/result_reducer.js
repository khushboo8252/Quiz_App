import { createSlice } from '@reduxjs/toolkit';

export const resultReducer = createSlice({
  name: 'result',
  initialState: {
    result: []
  },
  reducers: {
    setResult: (state, action) => {
      state.result[action.payload.trace] = action.payload.checked;
    }
  }
});

export const { setResult } = resultReducer.actions;
export default resultReducer.reducer;
