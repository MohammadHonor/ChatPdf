import axios from "axios";
import { useRef, useState } from "react";
import { CgAttachment } from "react-icons/cg";
import { FaArrowCircleUp } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addQuery } from "../../app/slice/chatSlice";
import { setDisplay } from "../../app/slice/uploadBox";
import { startChatting } from "../../app/slice/isChatStartSlice";
export const SearchBox = () => {
  const reference = useRef();
  const [query, setQuery] = useState();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.upload.display);
  const inputValue = (e) => {
    setQuery(e.target.value);
  };
  const getQuery = async () => {
    dispatch(startChatting());
    dispatch(addQuery(query));
    const res = await axios
      .post(`${import.meta.env.VITE_URI}/api/v1/querry/`, {
        querry: query,
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(res.data);
    console.log(reference.current.value);
    reference.current.value = null;
  };
  //  console.log(state)
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
        className="
        flex relative justify-between z-0
        items-center text-white bg-[#2F2F2F]
        rounded-full p-2 gap-2 w-[100%] h-10 "
      >
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
