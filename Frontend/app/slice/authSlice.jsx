import { createSlice } from "@reduxjs/toolkit";
// import { registerAuthThunk} from "../asyncthunk/registerAuth";
import { loginAuthThunk } from "../asyncthunk/loginAuth";
const initialState = {
  data: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAuthThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAuthThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(loginAuthThunk.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;
