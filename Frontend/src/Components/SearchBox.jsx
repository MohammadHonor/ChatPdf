import { useRef, useState } from "react";
import { CgAttachment } from "react-icons/cg";
import { FaArrowCircleUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addQuery, display } from "../../app/slice/answereSlice";
import { setDisplay } from "../../app/slice/uploadBox";
import { fetchAnswerByQuestion } from "../../app/asyncthunk/fetchAnswere";
// import Dictaphone from "../Dictaphone";

fetchAnswerByQuestion;
export const SearchBox = () => {
  const reference = useRef();
  const [query, setQuery] = useState();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.upload.display);
  const inputValue = (e) => setQuery(e.target.value);
  const isChatStart = useSelector(
    (state) => state.chatStartAndStop.isChatStart,
  );
  const getQuery = async () => {
    try {
      reference.current.value = "";
      //   dispatch(startChatting());
      dispatch(addQuery(query));
      await dispatch(fetchAnswerByQuestion({ querry: query }));
      dispatch(display());
    } catch (error) {
      console.log(error);
    }
  };
  const showFileBox = () => {
    if (state == "hidden") {
      dispatch(setDisplay("flex"));
    } else if (state == "flex") {
      dispatch(setDisplay("hidden"));
    }
  };
  return (
    <>
      <div
        className={` ${isChatStart ? "flex" : "hidden"} relative justify-between z-0 items-center text-white bg-[#2F2F2F] rounded-full p-2 gap-2 w-[50%] h-10 `}
      >
        {/* <Dictaphone /> */}
        <CgAttachment
          onClick={() => showFileBox()}
          className="text-2xl cursor-pointer"
        />
        <input
          className="
    w-full outline-none text-xl bg-[#2F2F2F]"
          ref={reference}
          name=""
          id=""
          onChange={inputValue}
          placeholder="Message ChatPDF"
        />
        <FaArrowCircleUp
          onClick={getQuery}
          className={`
    text-4xl cursor-pointer rounded-full
    ${query == null ? "opacity-25" : "opacity-100"}`}
        />
      </div>
      {/* <GetPdfBox /> */}
    </>
  );
};
