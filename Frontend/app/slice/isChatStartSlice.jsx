import { createSlice } from "@reduxjs/toolkit"

const initialState={
    isChatStart:false
}

export const isChatStartSlice = createSlice({
    name:"chatStartAndStop",
    initialState,
    reducers:{
        startChatting:(state)=>{
            state.isChatStart=true;
        }
    }
})
export const {startChatting} = isChatStartSlice.actions;
export default isChatStartSlice.reducer