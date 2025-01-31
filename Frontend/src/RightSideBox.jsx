import { useDispatch, useSelector } from "react-redux";
import { WelcomeBox } from "./Components/WelcomeBox";
import { openSideBar } from "../app/slice/hamburgerSlice";
import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { use } from "react";


export const RightSideBox = () => {
    const dispatch = useDispatch()
    const hamburger = useSelector((state)=>{
        return state.hamburger.isActive
    })
    const displaySideBar=()=>{
        dispatch(openSideBar())
    }
    console.log(hamburger)
    return (
    <div className="w-screen h-screen gap-2 bg-[#212121] text-white flex  flex-col items-center justify-center ">
        <div className="w-[100%] flex justify-between items-center text-white text-2xl opacity-70 pl-3 pr-8 mb-[2.7rem]">
            <div className="flex items-center gap-4">
                {hamburger == false ?<GiHamburgerMenu onClick={displaySideBar} className="cursor-pointer"/>:null }
                <span>chatPdf</span>
            </div>
            <span className="flex justify-center border-[1px] rounded-full bg-white text-black h-10 w-10 text-xl items-center">M</span>
        </div>
    <WelcomeBox/>
    </div>
)};
