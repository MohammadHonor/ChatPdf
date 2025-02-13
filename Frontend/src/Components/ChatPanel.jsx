import { TypeAnimation } from "react-type-animation";
import { useSelector } from "react-redux";
import { PiCirclesFourThin } from "react-icons/pi";
const ChatPanel = () => {
  const textData = useSelector((state) => state.answer.textData);

  return (
    <div className="flex flex-col w-[100%] gap-2 p-2 bg-gray-800">
      {textData.map((obj, index) => {
        return (
          <>
            <div className="flex w-[100%] justify-end">
              <span className="rounded-full p-2 shadow-sm bg-zinc-700">
                {obj.querry}
              </span>
            </div>
            <div className="flex w-[100%] justify-start">
              {!obj.answer ? (
                <PiCirclesFourThin className=" animate-spin text-[14px] relative " />
              ) : (
                <TypeAnimation
                  sequence={[`${obj.answer}`, 2000]}
                  speed={100}
                  cursor={false}
                  key={index}
                />
              )}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ChatPanel;
