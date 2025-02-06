import { MdPictureAsPdf } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";
import { CiLock } from "react-icons/ci";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { loginAuthThunk } from "../../app/asyncthunk/loginAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [eyeIcon, setEyeIcon] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    tickMark: false,
  });

  const getData = (e) => {
    e.target.default = "";
    const value = e.target.value;
    const name = e.target.name;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const SubmitData = async () => {
    if (!userData.tickMark) {
      toast.info("Please tick the check box");
      navigate("/login");
    } else {
      const response = await dispatch(
        loginAuthThunk({
          email: userData.email,
          password: userData.password,
        }),
      );

      if (response.error) {
        toast.error(response.error.message || "User not found");
        return;
      } else {
        console.log("login");
        toast.success("welcome to dashboard");
        navigate("/dashboard");
      }
    }
    setUserData({
      email: "",
      password: "",
      tickMark: false,
    });
  };
  function changeIcon() {
    eyeIcon ? setEyeIcon(false) : setEyeIcon(true);
  }
  const handleGoogleSuccess = (credentialResponse) => {
    console.log(credentialResponse);
    navigate("/dashboard");
  };
  const handleGoogleFailure = () => {
    console.log("fail");
  };
  return (
    <div className="p-2 flex flex-col justify-center items-center gap-4 text-white shadow-[0_8px_10px_-5px_rgba(0.5,0.5,8,0.9)] text-sm ">
      <div className="flex justify-center items-center gap-4 text-4xl">
        <MdPictureAsPdf className="text-blue-600" />
        <h2 className="text-blue-600">chatPdf</h2>
      </div>
      <p className="">
        Only login by email,Google,or +91 phone number <br />
        login is supported in your region
      </p>
      <div className="flex items-center pl-2 border w-[100%] h-[2.5rem] rounded bg-[#212121]/50 border-white/50 text-white">
        <SlEnvolope className="text-xl" />
        <input
          type="email"
          className="outline-none pl-2 w-[100%] h-full bg-[#212121]"
          name="email"
          value={userData.email}
          onChange={getData}
          placeholder="Email address"
        />
      </div>
      <div className="flex  items-center pl-2 border w-[100%] h-[2.5rem] rounded bg-[#212121]/50 border-white/50 text-white">
        <CiLock className="text-2xl " />
        <input
          type={eyeIcon ? "text" : "password"}
          className=" outline-none pl-2 w-[100%] bg-[#212121] h-full"
          name="password"
          value={userData.password}
          onChange={getData}
          placeholder="Password"
        />
        {eyeIcon == true ? (
          <FaRegEyeSlash
            className="text-2xl relative mr-2"
            onClick={() => changeIcon()}
          />
        ) : (
          <FaEye
            className="text-2xl relative mr-2"
            onClick={() => changeIcon()}
          />
        )}
      </div>
      <div className=" flex gap-2">
        <input
          type="checkbox"
          name="tickMark"
          checked={userData.tickMark}
          onChange={getData}
          className="h-4 w-4 mt-1"
          id=""
        />
        <span>
          I confirm that I have read,consent and agree to
          <br />
          {`ChatPdf's`}
          <a href="http://" className="text-blue-700">
            {" "}
            {`Terms of Use`}
          </a>{" "}
          and{" "}
          <a href="http://" className="text-blue-700">
            {" "}
            {` Privacy Policy`}
          </a>{" "}
        </span>
      </div>
      <div className="flex justify-center items-center w-[100%] h-[2.5rem] rounded bg-blue-900">
        <button onClick={SubmitData}>Sign in</button>
      </div>
      <div className="flex justify-between relative items-center w-[100%] text-blue-400">
        <span>Forgot password?</span>
        <NavLink to={"/register"}>Sign up</NavLink>
      </div>
      <div className="flex justify-center items-center w-[100%] h-[2.5rem] gap-2 opacity-80">
        <span className="border-t-[1px] border-white w-[40%]"></span>
        <span>OR</span>
        <span className="border-t-[1px] border-white w-[40%]"></span>
      </div>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleFailure}
      />
      {/* { registerPage ? <Register/>:''} */}
      {/* <ToastContainer/> */}
    </div>
  );
}

export default Login;
