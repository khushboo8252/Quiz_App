import { createSlice } from '@reduxjs/toolkit';

export const questionReducer = createSlice({
  name: 'questions',
  initialState: {
    queue: [],
    trace: 0
  },
  reducers: {
    setQuestions: (state, action) => {
      state.queue = action.payload;
    },
    nextQuestion: (state) => {
      if (state.trace < state.queue.length - 1) {
        state.trace += 1;
      }
    },
    prevQuestion: (state) => {
      if (state.trace > 0) {
        state.trace -= 1;
      }
    }
  }
});

export const { setQuestions, nextQuestion, prevQuestion } = questionReducer.actions;
export default questionReducer.reducer;
