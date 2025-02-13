import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/api";
import API_ENDPOINTS from "../../services/apiEndPoints";

const Logout = createAsyncThunk("user/logout", async (_, thunkAPI) => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.LOGOUT);
    console.log(response);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data);
  }
});

export default Logout;
