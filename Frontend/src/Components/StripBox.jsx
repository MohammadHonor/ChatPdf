import { IoDocumentLockSharp } from "react-icons/io5";
export const StripBox = () => {
    return (
    <div
    className="
        border-[.5px]
        flex
        p-1
        gap-2
        rounded-lg
        bg-[rgba(99,96,105,0.67)]
        opacity-50
        "
    >
    <span
        className="border-2 bg-white p-2 rounded ">
        <IoDocumentLockSharp
        className=" text-sky-400"/>
    </span>
    <span className="flex flex-col gap-2 " >
        <p className=" w-[6rem] h-2 rounded bg-white opacity-70 "></p>
        <div className=" flex gap-2">
        <p
            className="
                border-2
                w-[3rem]
                h-2
                rounded
                bg-white
                opacity-80
                "
          ></p>
          <p
            className="
                border-2
                w-[2rem]
                h-2
                rounded
                bg-slate-100
                opacity-80
                "
          ></p>
        </div>
      </span>
    </div>
  );
};
