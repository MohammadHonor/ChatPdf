// import { SignInButton } from "./Components/SignInButton";
// import { Button } from "./Components/Button";
// import { StripBox } from "./Components/StripBox";
import { useSelector } from "react-redux";
import { LeftSideBox } from "./LeftSideBox";
// import { SearchBox } from "./Components/SearchBox";
// import GetPdfBox from "./GetPdfBox";
import { RightSideBox } from "./RightSideBox";
// import { Counter } from "./Counter";
// import axios from "axios";
import { Loader } from "./Components/loader";
import { useEffect ,useState} from "react";
function App() {
    const [showLoader, setShowLoader] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setShowLoader(false)
        },3000)
    },[])
    const hamburger = useSelector((state)=>{
        return state.hamburger.isActive
    })
console.log(hamburger)
  return (
    <div className=" bg-[#212121] w-screen h-screen border-blue-700 flex justify-center items-center">
        {
            showLoader ? <Loader/>:<>
            { hamburger == false?null:<LeftSideBox />}
            <RightSideBox />
            </>
        }
    {/* <Counter/>
{/* {data} */}
    </div>
)};

export default App;
