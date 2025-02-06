import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "../app/store.jsx";
// import App from "./App.jsx";
// import { AppRoutes } from "./routes/AppRoutes.jsx";
import "./main.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/AppRoutes.jsx";
import { ToastContainer } from "react-toastify";
createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_CLIENT_ID}`}>
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <AppRoutes />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            closeOnClick={true}
            pauseOnHover={true}
            draggable={true}
            theme="light"
          />
        </BrowserRouter>
      </Provider>
    </StrictMode>
    ,
  </GoogleOAuthProvider>,
);
