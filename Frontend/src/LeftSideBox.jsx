import { FaHamburger } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { MdPictureAsPdf } from "react-icons/md";
import { Button } from "./Components/Button";
import { StripBox } from "./Components/StripBox";
import { SignInButton } from "./Components/SignInButton";
import { History } from "./Components/History";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../app/slice/hamburgerSlice";
import { GiHamburgerMenu } from "react-icons/gi";


export const LeftSideBox = () => {
    const dispatch = useDispatch()
    const displaySideBar=()=>{
        dispatch(closeSideBar())
    }
const data = false;
return (
    <div
    className="bg-[#171717] text-opacity-70 w-[30%]  p-3 text-white flex flex-col gap-6 h-screen ">
    <div className="flex justify-between items-center h-[2.5rem] text-white text-2xl opacity-70 mt-4">
        <GiHamburgerMenu  onClick={displaySideBar} className="cursor-pointer"/>
        <FaEdit className="cursor-pointer"/>
    </div>
    <div className="flex justify-start items-center gap-2 text-sky-400 text-3xl">
        <MdPictureAsPdf />
        <span className="font-bold text-white text-opacity-75 ">Chat PDF</span>
    </div>
    <Button prop="New Chat" />
    <Button prop="New Folder" />
    {data == true ? (
        <History />
    ) : (
        <div
        className="flex justify-center flex-col items-center h-[300px] gap-4">
        <div className="flex justify-center  items-center flex-col">
            <div className="flex z-0 justify-start w-[14rem]">
            <StripBox />
            </div>
            <div className="flex relative bottom-1.5 justify-end w-[14rem] z-50">
            <StripBox />
            </div>
            <div className=" z-0 flex justify-start relative bottom-3 w-[14rem]">
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
)};
