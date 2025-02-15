import { FaFilePdf } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { uploadPdfFile } from "../app/asyncthunk/uploadPdfFile";
import { setDisplay } from "../app/slice/uploadBox";

const GetPdfBox = () => {
  const state = useSelector((state) => state.upload);
  const dispatch = useDispatch();
  const getFile = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("pdf", file);
    dispatch(uploadPdfFile(formData));
    dispatch(setDisplay("hidden"));
  };
  return (
    <div className={`${state.display} absolute bottom-[3rem] left-[24rem] `}>
      <div
        className={` flex-col gap-2 z-50 rounded-2xl  justify-center items-center p-2 bg-[#2F2F2F] w-[14rem] `}
      >
        <div className="flex justify-start items-center gap-3 cursor-pointer= rounded p-2hover:bg-[#424242] text-white">
          <FaFilePdf className="text-white " />
          <label htmlFor="input-file" className="cursor-pointer">
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
