import { createAsyncThunk } from "@reduxjs/toolkit";
// import api from "../../services/api";
import axiosInstance from "../../services/api";
import API_ENDPOINTS from "../../services/apiEndPoints";
import API_CONFIG from "../../services/apiConfig";

const uploadPdfFile = createAsyncThunk(
  "user/uploadPdfFile",
  async (pdfFile, thunkAPI) => {
    try {
      // console.log(API_ENDPOINTS.POSTS)
      const response = await axiosInstance.post(
        API_ENDPOINTS.POSTS(),
        pdfFile,
        {
          headers: API_CONFIG.HEADERS,
        },
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data);
    }
  },
);

export { uploadPdfFile };
