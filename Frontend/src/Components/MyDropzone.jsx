import axios from 'axios';
import {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import { IoDocumentLockSharp } from "react-icons/io5";
function MyDropzone() {
    const [text,setText] = useState("drag & drop pdf file here, or click to select pdf file");
    const formData = new FormData();
    const onDrop = useCallback(acceptedFiles => {
    setText(`successfully ${acceptedFiles[0].name} uploaded`)
    console.log(acceptedFiles)
    formData.append("pdf",acceptedFiles[0])
        axios
            .post(`${import.meta.env.VITE_URI}/api/v1/content/`, formData)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
        })
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    // console.log(getInputProps,getInputProps);
    
    
    
    return (
    <div className={`flex justify-center items-center rounded-2xl bg-white h-[28rem] 
    w-[100%] `}>
        <div className={`flex flex-col justify-center items-center hover:bg-blue-100 border-black border-2 border-dashed 
        h-[24rem] w-[90%] rounded-2xl cursor-pointer text-black font-bold text-[16px]`}
        {...getRootProps()}>
        <input {...getInputProps()} />
        <IoDocumentLockSharp className=" text-sky-400 text-[32px]"/>
        {
            isDragActive ?
            <p>Drop the pdf here ...</p> :
            <p>{text}</p>
        }
        </div>
    </div>
)}
export {MyDropzone}