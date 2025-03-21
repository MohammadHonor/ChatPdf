import { configureStore } from "@reduxjs/toolkit";
// import chatReducer from "./slice/chatSlice.jsx";
import counterReducer from "./slice/counterSlice.jsx";
import uploadReducer from "./slice/uploadBox.jsx";
import answerReducer from "./slice/answereSlice.jsx";
import isChatStartReducer from "./slice/isChatStartSlice.jsx";
import hamburgerReducer from "./slice/hamburgerSlice.jsx";
import uploadPdFileReducer from "./slice/uploadPdfSlice.jsx";
import authReducer from "./slice/authSlice.jsx";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  storage,
  // blacklist:['counter','chat','upload','answer','chatStartAndStop','hamburger','uploadApi']
  whitelist: ["auth", "answer"],
};

const rootReducer = combineReducers({
  counter: counterReducer,
  // chat: chatReducer,
  upload: uploadReducer,
  answer: answerReducer,
  chatStartAndStop: isChatStartReducer,
  hamburger: hamburgerReducer,
  uploadApi: uploadPdFileReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
const persist = persistStore(store);

export { store, persist };
