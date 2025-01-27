import { WelcomBox } from "./Components/WelcomBox";
// import { PdfUploader } from "./Components/MyDropzone";
// import { MyDropzone } from "./Components/MyDropzone";


export const RightSideBox = () => {

    return (
    <div className="w-screen h-screen bg-[#212121] text-white flex  gap-2 flex-col items-center justify-center">
        <div className="w-[100%] flex justify-between items-center text-3xl pb-4 p-2 pl-4 pr-6 font-bold">
            <span>chatPdf</span>
            <span className="flex justify-center border-[1px] rounded-full bg-white text-black h-10 w-10 text-xl items-center">M</span>
        </div>
    <WelcomBox/>
    </div>
)};
