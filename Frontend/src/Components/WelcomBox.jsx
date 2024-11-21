import React from 'react'
import {TypeAnimation} from 'react-type-animation';
import { SearchBox } from './SearchBox';
export const WelcomBox = () => {
  return (
    <div
    className='
    flex
    gap-[2rem]
    flex-col
    items-center
    w-[40rem]
    h-
    '
    >
       <TypeAnimation
       sequence={[
        
        'Welcome to ChatPdf',
        1000, 
       
      ]}
       wrapper="span"
      speed={50}
      className='
      text-3xl
      font-bold
      '/>
     
    </div>
  )
}
