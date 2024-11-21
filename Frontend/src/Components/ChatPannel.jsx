import React from 'react'
import {TypeAnimation} from 'react-type-animation'
import { useSelector  } from 'react-redux'
const ChatPannel = () => {
  const data = true;
  var text = "I am fine what about you "

  const query = useSelector((state)=>{
    console.log(state)
    return state.chat.query
  })
  return (
    <div
    className='
    overflow-auto bg-[#0D0D0D] snap-y scroll-
    flex flex-col  w-[60%] h-[75%] relative
    top-10 p-4 pl-8 gap-4 
    '>
    {query.map((v)=>{

      return (
        <div
    className='
    flex justify-between gap-2
    flex-col 
    '>    
    <span
    className='
    text-blue-400
    '>Querry - {v}</span>
     <article
    className='
    break-words text-green-400'
    >
    <TypeAnimation
    sequence={[
      `${text}`
       ,
        1000,   
    ]
    }
    cursor={false} />
    </article>
    </div>
    )})}
    </div>
  )
}

export default ChatPannel