import { Loader } from "./Components/loader";
import { useEffect, useState } from "react";
// import Dictaphone from "./Dictaphone";
import Login from "./Components/Login";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  }, []);

  return (
    <div className=" bg-[#212121] h-screen border-blue-700 flex justify-center items-center">
      {showLoader ? <Loader /> : <Login />}
      {/* <Dictaphone/> */}
    </div>
  );
}

export default App;
