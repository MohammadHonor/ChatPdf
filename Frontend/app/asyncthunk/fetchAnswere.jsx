import { createAsyncThunk } from "@reduxjs/toolkit";
import API_ENDPOINTS from "../../services/apiEndPoints";
import axiosInstance from "../../services/api";
const fetchAnswerByQuestion = createAsyncThunk(
  "api/v1/generate",
  async (question, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        API_ENDPOINTS.TEXT_GENERATE,
        question,
      );
      return response.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  },
);

export { fetchAnswerByQuestion };
