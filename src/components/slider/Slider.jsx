import { MdOutlineDashboard } from "react-icons/md";
import { FaRegFolder } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { BiPieChartAlt2 } from "react-icons/bi";
import { BiMessageDetail } from "react-icons/bi";
import { IoMdCode } from "react-icons/io";

const Slider = () => {
  return (
    <div className="h-full px-4 py-5">
      <div className="h-9 w-[106px]">
        <img src="/logo.svg" alt="" className="h-full w-full object-contain" />
      </div>
      <ul className="">
        <li>
          <MdOutlineDashboard /> Dashboard
        </li>
        <li>
          <FaRegFolder /> Projects
        </li>
        <li>
          <GrGroup /> Teams
        </li>
        <li>
          <BiPieChartAlt2 /> Analytics
        </li>
        <li>
          <BiMessageDetail /> Messages
        </li>
        <li>
          <IoMdCode /> Integrations
        </li>
      </ul>
    </div>
  );
};
export default Slider;
