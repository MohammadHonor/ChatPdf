import React from 'react'
import { WelcomBox } from './Components/WelcomBox';
import ChatPannel from './Components/ChatPannel';
import { SearchBox } from './Components/SearchBox';

export const RightSideBox = () => {

        const data = false;
  return (
     <div 
    className='
    w-screen h-screen bg-[#212121]
    text-white flex  gap-4 flex-col 
    items-center justify-center
    '>
      {
        data == true ? <WelcomBox/> :<ChatPannel/>
      }
    <SearchBox/>
    </div>
  )}
