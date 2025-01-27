import { TypeAnimation } from "react-type-animation";
import { SearchBox } from "./SearchBox";
import ChatPannel from "./ChatPannel";
// import { SearchBox } from "./SearchBox";
import { MyDropzone } from "./MyDropzone";
import { useSelector } from "react-redux";
// import chatStartAndStop from 
export const WelcomBox = () => {
    const isChatStart = useSelector((state)=>{
        return state.chatStartAndStop.isChatStart
    })
    console.log(isChatStart)
  return (
    <div className="flex gap-[1rem] flex-col items-center w-[40rem]">
    <TypeAnimation
        sequence={["Welcome to ChatPdf", 1000]}
        wrapper="span"
        speed={50}
        className="text-3xl font-bold"/>
    {isChatStart == false ? <MyDropzone/> : <ChatPannel/>}
    <SearchBox/>
    </div>
)};
