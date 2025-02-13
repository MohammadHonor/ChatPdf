import { PiCirclesFourThin } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
export const Button = (prop) => {
  //const data = false;
  const data = false;
  return (
    <button
      className="text-opacity-65 text-white h-[3rem] border-[.2px] border-slate-400 w-[100%] rounded
    bg-gray-950 flex justify-center items-center gap-[.5rem]"
    >
      {data ? (
        <FaPlus className=" relative top-[.2px] flex justify-center items-center text-[14px] " />
      ) : (
        <PiCirclesFourThin className=" animate-spin text-[14px] relative top-[.2px] " />
      )}
      <span className=" text-[14px] font-bold ">
        {data ? prop.prop : "Processing..."}
      </span>
    </button>
  );
};
