import { createAsyncThunk } from "@reduxjs/toolkit";
import API_ENDPOINTS from "../../services/apiEndPoints";
import axiosInstance from "../../services/api";

export const loginAuthThunk = createAsyncThunk(
  "user/login",
  async (state, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.LOGIN_POST,
        state,
        {
          withCredentials: true,
        },
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  },
);
