import { createSlice } from "@reduxjs/toolkit";

const initialState={
    isActive:false
}

const hamburgerSlice =createSlice({
    name:"hamburger",
    initialState,
    reducers:{
        openSideBar:(state)=>{
            state.isActive=true
        },
        closeSideBar:(state)=>{
            state.isActive=false
        }
    }
})

export const {openSideBar,closeSideBar} = hamburgerSlice.actions
export default hamburgerSlice.reducer