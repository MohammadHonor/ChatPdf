import { createAsyncThunk } from "@reduxjs/toolkit";
import API_ENDPOINTS from "../../services/apiEndPoints";
import axiosInstance from "../../services/api";

export const registerAuthThunk = createAsyncThunk(
  "user/register",
  async (state, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.REGISTER_POST,
        state,
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  },
);
