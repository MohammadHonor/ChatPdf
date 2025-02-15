import { useDispatch, useSelector } from "react-redux";
import { WelcomeBox } from "./Components/WelcomeBox";
import { openSideBar } from "../app/slice/hamburgerSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { SearchBox } from "./Components/SearchBox";
import Profile from "./Components/Profile";
import { useState } from "react";

export const RightSideBox = () => {
  const dispatch = useDispatch();
  const hamburger = useSelector((state) => state.hamburger.isActive);
  const userInformation = useSelector((state) => state.auth.data);
  const [profile, setProfile] = useState(false);
  //   console.log("userinfosdoodlds", userInformation);
  const displayName =
    userInformation && userInformation.data && userInformation.data[0]
      ? userInformation.data[0].toUpperCase()
      : "N/A";
  const displaySideBar = () => {
    dispatch(openSideBar());
  };
  //   console.log(hamburger);
  return (
    <div className=" flex flex-col w-screen h-screen gap-2 bg-[#212121] text-white  ">
      <div className="w-[100%] h-[10%] items-center flex justify-between pl-2 pr-10">
        <div className="flex items-center gap-4 text-2xl">
          {hamburger == false ? (
            <GiHamburgerMenu
              onClick={displaySideBar}
              className="cursor-pointer"
            />
          ) : null}
          <span>chatPdf</span>
        </div>
        <div
          className="flex justify-center cursor-pointer border-[1px] rounded-full hover:bg-blue-400 bg-white text-black h-10 w-10 text-xl items-center relative"
          onClick={() => {
            if (profile) {
              setProfile(false);
            } else setProfile(true);
          }}
        >
          <span className="">{displayName}</span>
          <Profile isVisible={profile} />
        </div>
      </div>
      <div className="flex justify-center items-center h-[80%] overflow-auto snap-y">
        <WelcomeBox />
      </div>
      <div className="flex w-[100%] justify-center items-center">
        <SearchBox />
      </div>
    </div>
  );
};
