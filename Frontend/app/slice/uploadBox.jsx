import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  display: "hidden",
};
const uploadBoxSlice = createSlice({
  name: "uploadBox",
  initialState,
  reducers: {
    setDisplay: (state, action) => {
      state.display = action.payload;
    },
  },
});

export const { setDisplay } = uploadBoxSlice.actions;

export default uploadBoxSlice.reducer;
