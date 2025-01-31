import { configureStore } from "@reduxjs/toolkit";
import chatReducer from "./slice/chatSlice.jsx";
import counterReducer from "./slice/counterSlice.jsx";
import uploadReducer from "./slice/uploadBox.jsx";
// import ansReducer from "./slice/answereSlice.jsx";
import isChatStartReducer from "./slice/isChatStartSlice.jsx";
import hamburgerReducer from "./slice/hamburgerSlice.jsx"
import uploadPdFileReducer from './slice/uploadPdfSlice.jsx'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    chat: chatReducer,
    upload: uploadReducer,
    // answer: ansReducer,
    chatStartAndStop:isChatStartReducer,
    hamburger:hamburgerReducer,
    uploadApi:uploadPdFileReducer

}});
