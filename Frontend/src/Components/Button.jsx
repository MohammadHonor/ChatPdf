import { PiCirclesFourThin } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { clearTextData } from "../../app/slice/answereSlice";
import { useDispatch } from "react-redux";
import { startChatting } from "../../app/slice/isChatStartSlice";
export const Button = (prop) => {
  //const data = false;

  const dispatch = useDispatch();
  const startNewChat = () => {
    if (prop.prop == "New Chat") {
      dispatch(clearTextData());
      dispatch(startChatting());
    } else {
      window.location.href = "/dashboard";
    }
  };
  const data = true;
  return (
    <button
      className="text-opacity-65 text-white h-[3rem] hover:border-white hover:border-[0.5px] w-[100%] rounded
    bg-[#272735] flex justify-center items-center gap-[.5rem]"
      onClick={startNewChat}
    >
      {data ? (
        <FaPlus className=" relative top-[.2px] flex justify-center items-center text-[14px] " />
      ) : (
        <PiCirclesFourThin className=" animate-spin text-[14px] relative top-[.2px] " />
      )}
      <span className=" text-md">{data ? prop.prop : "Processing..."}</span>
    </button>
  );
};
