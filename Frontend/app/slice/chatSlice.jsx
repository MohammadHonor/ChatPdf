import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: [],
};

export const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addQuery: (state, action) => {
      //   console.log(action)
      state.query.push(action.payload);
    },
  },
});
//console.log(chatSlice)
export const { addQuery } = chatSlice.actions;
export default chatSlice.reducer;
