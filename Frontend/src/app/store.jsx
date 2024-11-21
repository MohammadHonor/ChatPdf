import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice.jsx' ;
import chatReducer from '../features/chat/chatSlice.jsx'
import uploadReducer from '../features/fileUpload/uploadBox.jsx'
export const store = configureStore({
  reducer: {
    counter:counterReducer,
    chat:chatReducer,
    upload:uploadReducer
  },
})