import { TypeAnimation } from "react-type-animation";
import { SearchBox } from "./SearchBox";
import ChatPanel from "./ChatPanel";
import { MyDropzone } from "./MyDropzone";
import GetPdfBox from "../GetPdfBox";
import { useSelector } from "react-redux";

export const WelcomeBox = () => {

    const isChatStart = useSelector((state)=>{
        return state.chatStartAndStop.isChatStart
    })
return(
    <div className="flex gap-[1rem] flex-col items-center w-[65%] relative">
    <TypeAnimation
        sequence={["Welcome to ChatPdf", 1000]}
        wrapper="span"
        speed={50}
        className="text-3xl font-bold"/>
    {isChatStart == false ? <MyDropzone/> : <ChatPanel/>}
    <GetPdfBox/>
    <SearchBox/>
    </div>
)};
