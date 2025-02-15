import { createSlice } from "@reduxjs/toolkit";
// import { registerAuthThunk} from "../asyncthunk/registerAuth";
import { loginAuthThunk } from "../asyncthunk/loginAuth";
import Logout from "../asyncthunk/logoutAuth";
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
      })
      .addCase(Logout.fulfilled, (state) => {
        (state.data = null), (state.loading = false), (state.error = null);
      });
  },
});

export default authSlice.reducer;
