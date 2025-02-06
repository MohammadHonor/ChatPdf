import { LeftSideBox } from "./LeftSideBox";
import { RightSideBox } from "./RightSideBox";
import { useSelector } from "react-redux";

function Dashboard() {
  const hamburger = useSelector((state) => {
    return state.hamburger.isActive;
  });
  return (
    <>
      {hamburger == false ? null : <LeftSideBox />}
      <RightSideBox />
    </>
  );
}
export default Dashboard;
