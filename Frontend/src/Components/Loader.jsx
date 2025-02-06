export const Loader = () => {
  return (
    <div className="relative flex justify-center items-center text-black">
      <div className="absolute h-[8rem] w-[8rem] rounded-full  border-b-8 border-blue-600 bg-white animate-spin-forward  "></div>
      <div className="absolute h-[6rem] w-[6rem] rounded-full  border-t-4 border-black animate-spin-reverse bg-white"></div>
    </div>
  );
};
