import { createSlice } from "@reduxjs/toolkit";
import { uploadPdfFile } from "../asyncthunk/uploadPdfFile";


const initialState={
    data:null,
    loading:false,
    error:null
}

const uploadPdfSlice = createSlice({
    name :"uploadPdf",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(uploadPdfFile.pending,(state)=>{
                state.loading=true
                state.error=null
            })
            .addCase(uploadPdfFile.fulfilled,(state,action)=>{
                state.loading=false
                state.data = action.payload
            })
            .addCase(uploadPdfFile.rejected,(state,action)=>{
                state.loading=true
                console.log(action.payload)
                state.error=action.payload
            })
    }
})

export default uploadPdfSlice.reducer