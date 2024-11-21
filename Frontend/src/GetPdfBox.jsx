import React from "react";
import axios from "axios";
import { FaFilePdf } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useEffect } from "react";
const GetPdfBox = () => {
  const state = useSelector((state) => state.upload.display);
  const getFile = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("pdf", file); 
    console.log("getfillllllllllllll")
    axios
      .post("http://127.0.0.1:8000/api/v1/content/", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={`${state} relative w-[60%] bottom-16 left-6`}>
      <div
        className={` flex-col gap-2 z-50
    rounded-2xl  justify-center items-center
    p-2 bg-[#2F2F2F] w-[14rem] `}
      >
        <div
          className="
       flex
       justify-start
       items-center
       gap-3
       cursor-pointer
       rounded
       
        p-2
        hover:bg-[#424242]
        text-white
       "
        >
          <FaFilePdf
            className="
       text-white 
       "
          />
          <label for="input-file" className="cursor-pointer">
            Upload from computer
            <input
              className="hidden"
              type="file"
              id="input-file"
              onChange={getFile}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default GetPdfBox;
