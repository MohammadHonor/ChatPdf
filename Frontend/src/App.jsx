import { useEffect, useState } from 'react'
import { SignInButton } from './Components/SignInButton'
import { Button } from './Components/Button'
import { StripBox } from './Components/StripBox'
import { LeftSideBox } from './LeftSideBox'
import { SearchBox } from './Components/SearchBox'
import GetPdfBox from './GetPdfBox'
import { RightSideBox } from './RightSideBox'
import { Counter } from './Counter'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0)
  const [data ,setdata] = useState("hi");

  return (
    <div
    className='
    border-2
    w-screen
    h-screen
    border-blue-700
    flex
    justify-center
    items-center

    '>
    <LeftSideBox/>
    <RightSideBox/>       
    {/* <Counter/>
{/* {data} */}
    </div>
  )
}

export default App
