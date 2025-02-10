import { Route, Routes } from "react-router-dom";
import App from "../App";
import Dashboard from "../Dashboard.jsx";
import { Register } from "../Components/Register.jsx";
import Login from "../Components/login.jsx";
export const AppRoutes = () => {
  return (
    <div className=" bg-[#212121] h-screen gap-2 border-blue-700 flex justify-center items-center">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path='/forget' element={<Register props={false}/>}/> */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};
