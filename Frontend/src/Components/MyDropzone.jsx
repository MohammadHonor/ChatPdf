import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoDocumentLockSharp } from "react-icons/io5";
import { uploadPdfFile } from "../../app/asyncthunk/uploadPdfFile";
import { useDispatch } from "react-redux";
function MyDropzone() {
  const [text, setText] = useState(
    "drag & drop pdf file here, or click to select pdf file",
  );
  const formData = new FormData();
  const dispatch = useDispatch();

  const onDrop = useCallback(async (acceptedFiles) => {
    try {
      setText(`file uploading...`);
      console.log(acceptedFiles);
      formData.append("pdf", acceptedFiles[0]);
      const response = await dispatch(uploadPdfFile(formData));
      // console.log(response)
      setText(`${response.payload}`);
    } catch (error) {
      console.error(error);
    }
  }, []);
  // print(response)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className={`flex justify-center items-center rounded-2xl bg-white h-[28rem] 
    w-[100%] `}
    >
      <div
        className={`flex flex-col justify-center items-center hover:bg-blue-100 border-black border-2 border-dashed 
        h-[24rem] w-[90%] rounded-2xl cursor-pointer text-black font-bold text-[16px]`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <IoDocumentLockSharp className=" text-sky-400 text-[32px]" />
        {isDragActive ? <p>Drop the pdf here ...</p> : <p>{text}</p>}
      </div>
    </div>
  );
}
export { MyDropzone };
