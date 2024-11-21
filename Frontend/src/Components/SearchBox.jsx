import React, { useRef, useState } from 'react'
import { FaArrowCircleUp } from "react-icons/fa";
import { CgAttachment } from "react-icons/cg";
import {useDispatch, useSelector} from 'react-redux'
import { addQuery } from '../features/chat/chatSlice';
import GetPdfBox from '../GetPdfBox';
import { setDisplay } from '../features/fileUpload/uploadBox';
export const SearchBox = () => {
        const reference = useRef();
        const [query,setQuery] = useState();
        const dispatch = useDispatch()
        const state = useSelector((state)=>state.upload.display);
        const inputValue = (e)=>{
        setQuery(e.target.value);
        }
        const getQuery=()=>{
          dispatch(addQuery(query))
          console.log(query);
        reference.current.value=null
        }
      //  console.log(state)
       const showFileBox=()=>{
            
         if(state == "hidden"){
           dispatch(setDisplay("flex"))
         }
         else if(state == "flex"){
          dispatch(setDisplay("hidden"));
         }
        
       } 
       
  return (
    <>
    <div 
    className='
    flex relative top-10 justify-between z-0
    items-center text-white bg-[#2F2F2F]
    rounded-full p-2 pt-2 pb-2 gap-2 w-[60%]'
    > 
        <CgAttachment
        onClick={()=>showFileBox()}
        className='text-3xl cursor-pointer'
        />
        <input
        className='
        w-full outline-none text-xlh-[2.5rem] bg-[#2F2F2F]
        '
        ref={reference}
        name="" 
        id="" 
        onChange={inputValue}
        placeholder='Message ChatPDF'/>
        <FaArrowCircleUp
        onClick={getQuery}
        className={`
         text-4xl cursor-pointer rounded-full
        ${query == null? "opacity-25":"opacity-100"}`}
        />
    </div>
    <GetPdfBox />
    </>
    
  )
}
