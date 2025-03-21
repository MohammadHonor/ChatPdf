import { createSlice } from "@reduxjs/toolkit";
import { fetchAnswerByQuestion } from "../asyncthunk/fetchAnswere";

const initialState = {
  loading: false,
  answer: "",
  querry: "",
  textData: [{ querry: "?", answer: "How can I help you" }],
  error: null,
};

const answerSlice = createSlice({
  name: "generatedText",
  initialState,
  reducers: {
    display: (state) => {
      state.textData.push({ querry: state.querry, answer: state.answer });
    },
    addQuery: (state, action) => {
      state.querry = action.payload;
    },
    clearTextData: (state) => {
      state.textData = [[{ querry: "?", answer: "How can I help you" }]];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnswerByQuestion.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnswerByQuestion.fulfilled, (state, action) => {
        state.loading = false;
        state.answer = action.payload;
      })
      .addCase(fetchAnswerByQuestion.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      });
  },
});
export const { addQuery, display, clearTextData } = answerSlice.actions;
export default answerSlice.reducer;
