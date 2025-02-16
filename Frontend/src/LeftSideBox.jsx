import { FaEdit } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";
import { Button } from "./Components/Button";
import { StripBox } from "./Components/StripBox";
import { SignInButton } from "./Components/SignInButton";
import { History } from "./Components/History";
import { useDispatch, useSelector } from "react-redux";
import { closeSideBar } from "../app/slice/hamburgerSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { startChatting } from "../app/slice/isChatStartSlice";

export const LeftSideBox = () => {
  const dispatch = useDispatch();
  const displaySideBar = () => dispatch(closeSideBar());
  const data = useSelector((state)=>state.auth.data)
//   console.log("skskksks")

  return (
    <div className="bg-[#1d1c1c] text-opacity-70 w-[25%]  p-3 text-white flex flex-col gap-2 h-screen pt-0 pb-0">
      <div className="flex justify-between items-center h-[10%] text-white text-2xl opacity-80">
        <GiHamburgerMenu onClick={displaySideBar} className="cursor-pointer" />
        <FaEdit className="cursor-pointer"
        onClick={()=>dispatch(startChatting())} />
      </div>
      <div className="flex justify-start items-center gap-2 text-sky-400 text-2xl">
        <MdPictureAsPdf />
        <span className="font-bold text-white text-opacity-75 ">Chat PDF</span>
      </div>
      <Button prop="New Chat" />
      <Button prop="New Pdf" />
      {data ? (
        <History />
      ) : (
        <div className="flex justify-center flex-col items-center h-[65%] gap-4">
          <div className="flex justify-center  items-center flex-col">
            <div className="flex z-0 justify-start w-[60%]">
              <StripBox />
            </div>
            <div className="flex relative bottom-1.5 justify-end w-[60%]">
              <StripBox />
            </div>
            <div className=" z-0 flex justify-start relative bottom-3 w-[60%]">
              <StripBox />
            </div>
          </div>
          <span>
            Sign in for free to save
            <br /> your chat history
          </span>
          <SignInButton />
        </div>
      )}
    </div>
  );
};
