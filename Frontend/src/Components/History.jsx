import { useSelector } from "react-redux";

export const History = () => {
  const query = useSelector((state) => state.answer.textData);
  // console.log(query)
  return (
    <div className="flex flex-col">
      <b>History</b>
      {query.map((obj, index) => (
        <p
          className="hover:bg-[#272735] rounded p-1 cursor-pointer text-sm"
          key={index}
        >
          {obj.querry}
        </p>
      ))}
    </div>
  );
};
