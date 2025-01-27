import { TypeAnimation } from "react-type-animation";
import { useSelector } from "react-redux";
const ChatPannel = () => {
var text = "I am fine what about you ";

const query = useSelector((state) => {
    // console.log(state);
    return state.chat.query;
});
return (
    <div
    className="
    overflow-auto bg-[#0D0D0D] snap-y scroll-
    flex flex-col h-[28rem] w-[100%] top-10 p-4 pl-8 gap-4"
    >
    {query.map((v,index) => {
    return (
    <div className="flex justify-between gap-2 flex-col "
    key={index}
    >
        <span className='text-blue-400'>
        Querry - {v}
        </span>
        <article className="break-words text-green-400">
            <TypeAnimation sequence={[`${text}`, 1000]} cursor={false} />
        </article>
        </div>
    );
    })}
</div>
)};

export default ChatPannel;
