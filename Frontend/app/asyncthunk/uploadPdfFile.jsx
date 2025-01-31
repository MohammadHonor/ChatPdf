import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";
import API_ENDPOINTS from "../../services/apiEndPoints";

const uploadPdfFile = createAsyncThunk('user/uploadPdfFile',async(pdfFile,thunkAPI)=>{
    try {
        console.log(API_ENDPOINTS.POSTS)
        const response = await api.post(API_ENDPOINTS.POSTS(),pdfFile)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data)
    }
})

export {uploadPdfFile}