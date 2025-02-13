import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import Logout from "../../app/asyncthunk/logoutAuth";
function Profile(props) {
  const dispatch = useDispatch();
  const userInformation = useSelector((state) => state.auth.data);
  console.log(userInformation);
  const clear = async () => {
    localStorage.clear();
    await dispatch(Logout());
    window.location.href = "/login";
  };

  return (
    <div
      className={` ${props.isVisible ? "flex" : "hidden"} absolute flex-col w-[10rem] p-2 justify-start gap-1 text-white text-sm bg-[#3A3A46] rounded right-[2px] top-12`}
    >
      <div className="rounded hover:bg-[#555562] pl-1">
        {userInformation.data}
      </div>
      <div
        className=" flex justify-start gap-2 items-center pl-[2px] hover:bg-[#555562] rounded"
        onClick={clear}
      >
        <IoIosLogOut />
        <span>Sign out</span>
      </div>
    </div>
  );
}

export default Profile;
