import { MdPictureAsPdf } from "react-icons/md";
import { SlEnvolope } from "react-icons/sl";
import { CiLock } from "react-icons/ci";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
// import Login from './login';
import { useState } from "react";
import axios from "axios";
import API_CONFIG from "../../services/apiConfig";
import API_ENDPOINTS from "../../services/apiEndPoints";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
export const Register = () => {
  const [fp, setFp] = useState(false);

  // console.log(props)

  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    password: "",
    conf_password: "",
    check: false,
  });

  const [eyeIcon, setEyeIcon] = useState(false);
  function changeIcon() {
    if (eyeIcon) {
      setEyeIcon(false);
    } else {
      setEyeIcon(true);
    }
  }
  const getData = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const signUpButtonHandler = async () => {
    if (inputData.password != inputData.conf_password) {
      alert("password not match");
    }
    if (!inputData.check) {
      alert("please check the box");
    }
    try {
      const response = await axios.post(
        `${API_CONFIG.BASE_URL}${API_ENDPOINTS.REGISTER_POST}`,
        {
          name: inputData.name,
          email: inputData.email,
          password: inputData.password,
        },
      );
      console.log(response);
      if (response.status == 201) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("you are already register");
    }
    setInputData({
      name: "",
      email: "",
      password: "",
      conf_password: "",
      check: false,
    });
  };
  return (
    <div className="flex items-center justify-center w-[100%] h-[100%] bg-[#212121] text-white ">
      <div
        className={`h-[80%] w-[340px] flex flex-col gap-4  p-2.5 bg-[#212121] shadow-[0_8px_10px_-5px_rgba(0.5,0.5,8,0.9)] text-sm `}
      >
        <div className="flex justify-center items-center gap-4 text-4xl">
          <MdPictureAsPdf className="text-blue-600" />
          <h2 className="text-blue-600">chatPdf</h2>
        </div>
        <div className="flex flex-col gap-2">
          <span>
            {fp
              ? "Reset the password by email"
              : "Only sign up by email is possible"}{" "}
          </span>
          <input
            type="name"
            name="name"
            placeholder="Name"
            className={`${fp ? "hidden" : "block"} p-2.5 w-[100%] border-[1px] rounded outline-none bg-[#212121]/50 border-white/50 text-white`}
            value={inputData.name}
            onChange={getData}
          />
        </div>
        <div className="flex items-center pl-2 border w-[100%] h-[2.5rem] rounded bg-[#212121]/50 border-white/50 text-white ">
          <SlEnvolope className="text-xl" />
          <input
            type="email"
            className="outline-none pl-2 w-[100%] h-full bg-[#212121]"
            name="email"
            value={inputData.email}
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
            value={inputData.password}
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
        <div className="flex  items-center pl-2 border w-[100%] h-[2.5rem] rounded bg-[#212121]/50 text-white border-white/50">
          <CiLock className="text-2xl " />
          <input
            type={eyeIcon ? "text" : "password"}
            className=" outline-none pl-2 w-[100%] bg-[#212121] h-full"
            name="conf_password"
            value={inputData.conf_password}
            onChange={getData}
            placeholder="Confirm password"
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
        <div
          className={`${fp ? "hidden" : "block"} flex justify-center items-center gap-2`}
        >
          <input
            type="checkbox"
            name="check"
            className={`mb-4 h-4 w-4`}
            checked={inputData.check}
            onChange={getData}
          />
          <span>
            I confirm that I have read,consent and agree to
            <br />
            {`ChatPdf's`}
            <a href="http://" className="text-blue-700">
              {" "}
              Terms of Use
            </a>{" "}
            and
            <a href="http://" className="text-blue-700">
              {" "}
              Privacy Policy
            </a>{" "}
          </span>
        </div>
        <div className="flex  items-end h-[15%] w-[100%[">
          <button
            type="button"
            className="bg-blue-900 rounded-md p-2.5 w-[100%] h-[45%]"
            onClick={signUpButtonHandler}
          >
            {fp ? "Continue" : "Sign Up"}
          </button>
        </div>
        <div
          className={`flex justify-between relative items-center w-[100%] text-blue-400`}
        >
          <span onClick={() => setFp(true)} className="cursor-pointer">
            {fp ? "" : "Forgot password?"}
          </span>
          <NavLink to={`/login`}>{fp ? "back to login" : "Login"}</NavLink>
        </div>
      </div>
    </div>
  );
};
